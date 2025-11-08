function simularLogin(usuario, senha) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (usuario === "admin" && senha === "123456") {
                resolve("Login realizado com sucesso");
            } else {
                reject("Usuário e/ou senha inválidos");
            }
        }, 3000);
    });
}

document.getElementById("btnLogin").addEventListener("click", () => {

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    const msg = document.getElementById("mensagem");

    msg.textContent = "Verificando login...";

    simularLogin(usuario, senha)
    .then((mensagem) => {
        msg.textContent = mensagem;
        msg.style.color = "green";
    })
    .catch((erro) => {
        msg.textContent = erro;
        msg.style.color = "red";
    });
});