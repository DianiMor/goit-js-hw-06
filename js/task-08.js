const formulario = document.querySelector(".login-form");

formulario.addEventListener("submit", submitForm);
event.preventDefault();

const form = event.target; // Corrección: Cambiar 'form' por 'event.target'

const mail = form.elements.email;
const passw = form.elements.password;

if (email.value === "" || passw.value === "") {
  alert("Todos los espacios deben ser rellenados");
} else {
  const user = {
    email: mail.value,
    password: passw.value,
  };

  console.log(user);
  formulario.reset();
}
