const inputName = document.getElementById("name-input");
const outputName = document.getElementById("name-output");

inputName.addEventListener("input", function () {
  const valinput = inputName.value;

  if (valinput.trim() === "") {
    outputName.textContent = "Anonymous";
  } else {
    outputName.textContent = valinput;
  }
});
