# 🧠 Brain-Mimic Logic Simulator

A visually stunning, interactive web-based simulator that mimics the computational logic of the human brain's neural pathways. This project implements a **Perceptron** (the fundamental building block of Artificial Neural Networks) from scratch using pure frontend technologies.

---

## 🚀 Live Demo
👉 **[Insert your live hosting link here after deployment]**

---

## 🌟 Key Features

- **Interactive Neural Activation:** Click on input neurons (A & B) to toggle their states ($0$ or $1$) and watch them glow dynamically.
- **Real-Time Perceptron Math:** Adjust weights ($w_1, w_2$) and threshold thresholds ($\theta$) using interactive sliders to see calculations happen live.
- **Dynamic Synapse Canvas:** Connecting lines (synapses) dynamically change color (Green for active positive, Red for inhibitory negative, Gray for dead) and thickness based on signal strength.
- **Logic Gate Presets:** Instant configuration buttons to load presets for fundamental AI concepts like **AND Gate** and **OR Gate**.
- **Cyberpunk Dark Theme:** A sleek, developer-friendly interface designed with smooth neon glowing transitions.

---

## 📐 How It Works (The Math Behind The Brain)

The core engine utilizes the standard threshold activation function of an artificial neuron:

$$\text{Total Input} = (A \times w_1) + (B \times w_2)$$

- If $\text{Total Input} \ge \text{Threshold} (\theta)$, the Output Neuron ($Y$) fires and activates ($1$).
- If $\text{Total Input} < \text{Threshold} (\theta)$, the Output Neuron ($Y$) remains silent ($0$).

### Try these presets in the simulator:
1. **AND Gate:** Set $w_1 = 1.0, w_2 = 1.0, \theta = 1.5$. (Fires only when both inputs are active).
2. **OR Gate:** Set $w_1 = 1.0, w_2 = 1.0, \theta = 0.8$. (Fires when at least one input is active).

---

## 🛠️ Tech Stack Used

- **HTML5:** Structure and Semantic layout.
- **CSS3:** Custom styling, dark mode configuration, and keyframe neon glow animations.
- **Vanilla JavaScript (ES6):** State management, DOM manipulation, and core math logic.
- **HTML5 Canvas API:** Mathematical tracking of node coordinates to draw and animate custom dynamic connecting lines.

---

## 📂 Project Structure

```text
brain-mimic-simulator/
│
├── index.html       # UI Elements & Layout Structure
├── style.css        # Cyberpunk Theme & Glow Animations
├── app.js           # Perceptron Math Logic & Canvas Drawing
└── README.md        # Project Documentation (This file)
