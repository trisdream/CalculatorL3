const inputValue = document.getElementById("user-input");

// Handle number button clicks
document.querySelectorAll(".numbers").forEach(function (item) {
  item.addEventListener("click", function (e) {
    if (inputValue.innerText === "NaN" || inputValue.innerText === "0") {
      inputValue.innerText = "";
    }
    inputValue.innerText += e.target.innerHTML.trim();
  });
});

// Handle operation button clicks
document.querySelectorAll(".operations").forEach(function (item) {
  item.addEventListener("click", function (e) {
    const lastValue = inputValue.innerText.slice(-1); // Get the last character

    switch (e.target.innerHTML) {
      case "=":
        if (!isNaN(lastValue)) {
          try {
            inputValue.innerText = eval(inputValue.innerText);
          } catch (error) {
            inputValue.innerText = "NaN"; // Handle invalid expressions
          }
        }
        break;

      case "AC":
        inputValue.innerText = "0"; // Reset to zero
        break;

      case "DEL":
        inputValue.innerText = inputValue.innerText.slice(0, -1);
        if (inputValue.innerText.length === 0) {
          inputValue.innerText = "0"; // Reset to zero if empty
        }
        break;

      default:
        // Avoid adding operator if the last character is already an operator
        if (!isNaN(lastValue) || lastValue === ")") {
          inputValue.innerText += e.target.innerHTML;
        }
        break;
    }
  });
});
