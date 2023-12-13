const formulario = document.querySelector(".login-form");

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Debes rellenar todos los campos del formulario");
  }

  const formValue = {
    [email.name]: email.value,
    [password.name]: password.value,
  };

  console.log("formValue:", formValue);
  event.currentTarget.reset();
}

formulario.addEventListener("submit", onFormSubmit);
