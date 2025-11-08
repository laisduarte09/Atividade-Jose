function esperar(ms) {
    return new Promise(r => setTimeout(r, ms));
}

async function pingar() {
    let host = document.getElementById("host").value || "localhost";
    let ip = "172.217.28.68";
    let saida = document.getElementById("saida");
    saida.innerText = `Disparando ${host} [${ip}] com 32 bytes de dados:\n`;

    let tempos = [];
    for (let i = 1; i <= 4; i++) {
        let t = Math.floor(Math.random() * 100) + 10;
        saida.innerText += `Resposta de ${ip}: bytes=32 tempo=${t}ms TTL=114\n`;
        tempos.push(t);
        await esperar(1000);
    }

    let min = Math.min(...tempos);
    let max = Math.max(...tempos);
    let media = Math.round(tempos.reduce((a, b) => a + b) / tempos.length);
    saida.innerText += `\nEstatísticas do Ping para ${ip}:\n`;
    saida.innerText += `  Pacotes: Enviados = 4, Recebidos = 4, Perdidos = 0 (0% de perda)\n`;
    saida.innerText += `  Mínimo = ${min}ms, Máximo = ${max}ms, Média = ${media}ms`;
}

document.getElementById("pingarBtn").addEventListener("click", pingar);