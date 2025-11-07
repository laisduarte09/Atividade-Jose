function sorteio() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const numero = Math.floor(Math.random() * 10) + 1;

      if (numero > 5) {
        resolve(`Você ganhou! Número sorteado: ${numero}`);
      } else {
        reject(`Tente novamente. Número: ${numero}`);
      }
    }, 1000);
  });
}

function repetirAteGanhar() {
  const msg = document.getElementById("mensagem");
  msg.textContent = "Sorteando...";
  msg.style.color = "black";

  sorteio()
    .then((resultado) => {
      msg.textContent = resultado;
      msg.style.color = "green";
    })
    .catch((erro) => {
      msg.textContent = erro;
      msg.style.color = "red";

      setTimeout(() => {
        repetirAteGanhar();
      }, 1000);
    });
}

document.getElementById("btnSortear").addEventListener("click", () => {
  repetirAteGanhar();
});