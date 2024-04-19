/** @format */

import { game } from "./game.js";

document.getElementById("option1").addEventListener("click", event => {
  updateGameState(0);
  event.target.blur(); // ** needed this to remove focus from the button after it is clicked
});

document.getElementById("option2").addEventListener("click", event => {
  updateGameState(1);
  event.target.blur(); // ** Same for this button, remove focus after click
});

function updateGameState(optionIndex) {
  const state = game.states[game.currentState];
  const nextOption = state.options[optionIndex];

  if (nextOption) {
    game.moveToState(nextOption.nextState);
    updateUI();
  } else {
    alert("Game Over!");
  }
}

// ** Variable for determining which button animation to delay
let delayToggle = false;

function updateUI() {
  const state = game.states[game.currentState];
  const storyElement = document.getElementById("story");
  const button1 = document.getElementById("option1");
  const button2 = document.getElementById("option2");

  // Set story text
  storyElement.textContent = state.description;

  // Update button texts
  button1.textContent = state.options[0]?.buttonText || "End Game";
  button2.textContent = state.options[1]?.buttonText || "End Game";

  // Update fear level styles
  storyElement.classList.remove(
    "text-low-fear",
    "text-medium-fear",
    "text-high-fear"
  );
  if (state.fearLevel === "low") {
    storyElement.classList.add("text-low-fear");
  } else if (state.fearLevel === "medium") {
    storyElement.classList.add("text-medium-fear");
  } else if (state.fearLevel === "high") {
    storyElement.classList.add("text-high-fear");
  }

  // Reset button classes
  button1.className = "choice-btn";
  button2.className = "choice-btn";

  // Apply bounce classes based on the toggle
  if (delayToggle) {
    button1.classList.add("bounce-delay");
    button2.classList.add("bounce");
  } else {
    button1.classList.add("bounce");
    button2.classList.add("bounce-delay");
  }

  // Toggle the delay for next update
  delayToggle = !delayToggle;

  // Add animationend listener to remove classes after animation
  [button1, button2].forEach(button => {
    button.addEventListener(
      "animationend",
      () => {
        button.classList.remove("bounce", "bounce-delay");
      },
      { once: true }
    );
  });
}
// ** Start game
updateUI();
