window.addEventListener("load", fadeOut);

function fadeOut(clickedButtonId) {
  if (clickedButtonId === "Forest") {
    var originalButtons = document.querySelectorAll(".button:not(.hidden)");
    originalButtons.forEach(function (button) {
      button.style.opacity = "0";
      setTimeout(function () {
        button.style.display = "none";
      }, 400);
    });

    setTimeout(function () {
      displayNewButtons();
    }, 500);
  }
}

function displayNewButtons() {
  var newButton1 = document.getElementById("confiderous");
  var newButton2 = document.getElementById("deciduous");
  newButton1.classList.remove("hidden");
  newButton2.classList.remove("hidden");

  setTimeout(function () {
    newButton1.style.opacity = "1";
    newButton2.style.opacity = "1";
  }, 100);
}
