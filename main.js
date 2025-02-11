const inputField = document.querySelector(".countdownTimer-input");
const startButton = document.querySelector(".countdownTimer-button");

startButton.addEventListener("click", function () {
  // Get input & convert to a number
  let seconds = parseInt(inputField.value);
  const intervalId = setInterval(() => {
    if (seconds > 1) {
      seconds = seconds - 1;
      document.querySelector(
        ".countdownTimer-display"
      ).textContent = `Time: ${seconds}s`;
    } else {
      clearInterval(intervalId);
      document.querySelector(".countdownTimer-display").textContent =
        "Time's up!";
    }
  }, 1000);
});
