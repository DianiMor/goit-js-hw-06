const inputElement = document.getElementById("validation-input");

inputElement.addEventListener("blur", function () {
  const inputValue = inputElement.value;

  console.log(inputValue);

  if (inputValue.length === 6) {
    inputElement.classList.remove("invalid");
    inputElement.classList.add("valid");
  } else {
    inputElement.classList.remove("valid");
    inputElement.classList.add("invalid");
  }
});
