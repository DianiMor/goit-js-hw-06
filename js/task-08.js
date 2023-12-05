const formulario = document.querySelector(".login-form");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const mail = form.elements.email;
  const passw = form.elements.password;

  if (email.value === "" || password.value === "") {
    alert("Todos los espacios deben ser rellenados");
  } else {
    const user = {
      email: mail.value,
      password: passw.value,
    };

    console.log(user);
    formulario.reset();
  }
});
