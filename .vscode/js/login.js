
const formulario = document.getElementById("loginForm");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;

    alert("E-mail informado: " + email);
});
