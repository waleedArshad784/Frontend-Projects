# 02 - BMI Calculator

A web-based BMI (Body Mass Index) calculator built with pure JavaScript.

## 🎯 What it does
- Takes user input for height and weight.
- Validates inputs before running calculations.
- Displays the calculated BMI and health category dynamically on the screen.

## 🧠 JavaScript Concepts Used
- DOM Manipulation (`getElementById`, `innerHTML`, `innerText`)
- Event Listeners (`click`)
- Input validation & Logical Operators (`&&`, `<=`)
- Conditional Logic (`if...else if...else`)

## 🐛 Key Challenge & Solution
- **Challenge:** The input values were returning `0` when the page loaded.
- **Solution:** Moved reading `input.value` inside the button click handler function so values are captured at the exact moment the button is pressed.
 
