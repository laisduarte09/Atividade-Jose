function esperar(ms) {
    return new Promise(r => setTimeout(r, ms));
}

async function carregar() {
    let s = document.getElementById("status");
    s.innerText = "Inicializando...";
    await esperar(1000);

    s.innerText = "Carregando módulos...";
    await esperar(4000);

    s.innerText = "Sistema pronto!";
}

document.getElementById("botao").addEventListener("click", carregar);