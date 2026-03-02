const formulario = document.getElementById("meuFormulario");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const idade = document.getElementById("idade").value;
    const mensagem = document.getElementById("mensagem");

    if (nome === "" || email === "" || idade === "") {
        mensagem.innerHTML = "Preencha todos os campos!";
        mensagem.style.color = "red";
    } else {
        mensagem.innerHTML = "Cadastro realizado com sucesso, " + nome + "!";
        mensagem.style.color = "green";
        formulario.reset();
    }
});