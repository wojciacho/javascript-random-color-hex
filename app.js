const container = document.querySelector(".container");
const button = document.querySelector("#button-color");
const input = document.querySelector("#random-color");
const alert = document.querySelector(".alert");

function generateRandomColor() {
  button.addEventListener("click", () => {
    let hex = "#";
    let randomNumber = Math.floor(Math.random() * 16777215).toString(16);
    input.value = hex + randomNumber;
    document.body.style.backgroundColor = hex + randomNumber;
  });

  input.addEventListener("click", () => {
    const copy = input.value;
    const clipboard = navigator.clipboard;
    clipboard.writeText(copy);
    displayAlert("Copied to clipboard");
  });
}

generateRandomColor();

function displayAlert(text) {
  alert.textContent = text;
  alert.classList.add(`alert-danger`);
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-danger`);
  }, 1000);
}
