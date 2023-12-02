const formulario = document.querySelector(".login-form");

form.addEventListener("submit", function (alert) {
  alert.preventDefault();

  const mail = form.elements.email;
  const passw = form.elements.password;

  if (email === "" || password === "") {
    alert("Todos los espacios deben ser rellenados");
  } else {
    const user = {
      email: mail.value,
      password: passw.value,
    };

    console.log(formData); // Muestra los datos en la consola
    form.reset(); // Borra los valores del formulario
  }
});
