// Initial State Variables
let inputA = 0;
let inputB = 0;

// 1. Toggle Input Neurons (On/Off)
function toggleInput(node) {
    if (node === 'A') {
        inputA = inputA === 0 ? 1 : 0;
        document.getElementById('valA').innerText = inputA;
        document.getElementById('inputA').classList.toggle('active', inputA === 1);
    } else if (node === 'B') {
        inputB = inputB === 0 ? 1 : 0;
        document.getElementById('valB').innerText = inputB;
        document.getElementById('inputB').classList.toggle('active', inputB === 1);
    }
    updateNetwork();
}

// 2. Main Logic Engine: Calculate Neuronal Fire
function updateNetwork() {
    const w1 = parseFloat(document.getElementById('w1').value);
    const w2 = parseFloat(document.getElementById('w2').value);
    const threshold = parseFloat(document.getElementById('th').value);

    document.getElementById('w1-val').innerText = w1;
    document.getElementById('w2-val').innerText = w2;
    document.getElementById('th-val').innerText = threshold;

    // Core Perceptron Formula
    const totalInput = (inputA * w1) + (inputB * w2);
    
    document.getElementById('calc-text').innerText = 
        `(${inputA} × ${w1}) + (${inputB} × ${w2}) = ${totalInput.toFixed(1)} (Threshold: ${threshold})`;

    const outputNeuron = document.getElementById('outputY');
    if (totalInput >= threshold) {
        document.getElementById('valY').innerText = "1";
        outputNeuron.classList.add('active');
    } else {
        document.getElementById('valY').innerText = "0";
        outputNeuron.classList.remove('active');
    }

    // Dynamic lines draw karne ke liye function call
    drawLines();
}

// 3. Dynamic Canvas Drawing for Synapses
function drawLines() {
    const canvas = document.getElementById('synapseCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const container = canvas.parentElement;
    
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;

    function getCenter(elementId) {
        const el = document.getElementById(elementId);
        const rect = el.getBoundingClientRect();
        const cntRect = container.getBoundingClientRect();
        return {
            x: rect.left - cntRect.left + rect.width / 2,
            y: rect.top - cntRect.top + rect.height / 2
        };
    }

    const posA = getCenter('inputA');
    const posB = getCenter('inputB');
    const posY = getCenter('outputY');

    const w1 = parseFloat(document.getElementById('w1').value);
    const w2 = parseFloat(document.getElementById('w2').value);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    function drawSynapse(from, to, isActive, weight) {
        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        
        if (isActive && weight > 0) {
            ctx.strokeStyle = '#56ff75'; // Glowing Green
            ctx.lineWidth = 3 + (weight * 2); 
            ctx.shadowColor = '#238636';
            ctx.shadowBlur = 12;
        } else if (weight < 0) {
            ctx.strokeStyle = '#ff7b72'; // Inhibitory Red
            ctx.lineWidth = 2 + Math.abs(weight);
            ctx.shadowBlur = 0;
        } else {
            ctx.strokeStyle = '#30363d'; // Inactive Dull Gray
            ctx.lineWidth = 2;
            ctx.shadowBlur = 0;
        }
        
        ctx.stroke();
    }

    drawSynapse(posA, posY, inputA === 1, w1);
    drawSynapse(posB, posY, inputB === 1, w2);
}

// 4. Presets for Logic Gates
function setPreset(gateType) {
    if (gateType === 'AND') {
        document.getElementById('w1').value = 1.0;
        document.getElementById('w2').value = 1.0;
        document.getElementById('th').value = 1.5;
    } else if (gateType === 'OR') {
        document.getElementById('w1').value = 1.0;
        document.getElementById('w2').value = 1.0;
        document.getElementById('th').value = 0.8;
    }
    updateNetwork();
}

// 5. Reset Network
function resetNetwork() {
    inputA = 0;
    inputB = 0;
    document.getElementById('valA').innerText = "0";
    document.getElementById('valB').innerText = "0";
    document.getElementById('inputA').classList.remove('active');
    document.getElementById('inputB').classList.remove('active');
    
    document.getElementById('w1').value = 0.5;
    document.getElementById('w2').value = 0.5;
    document.getElementById('th').value = 0.8;
    
    updateNetwork();
}

// Window resize hone par lines thik jagah rahein uske liye listener
window.addEventListener('resize', drawLines);

// Initial Load execution
updateNetwork();