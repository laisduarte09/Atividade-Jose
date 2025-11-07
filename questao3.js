const botao = document.querySelector('.botao-pedido')
const fundoEscuro = document.querySelector('.fundo-escuro')
const icone = document.querySelector('.icone')
const titulo = document.querySelector('.titulo')
const subtitulo = document.querySelector('.subtitulo')

const abrirFlutuante = () => {
    fundoEscuro.classList.add('visible')
    fazerPedido()
}

const fecharFlutuante = () => {
    fundoEscuro.classList.remove('visible')
}

const esperar = (ms) => {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

const fazerPedido = async () => {
    await esperar(3000)

    aceitarPedido()

    await esperar(3000)

    prepararPedido()

    await esperar(10000)
    
    entregarPedido()
    
    await esperar(5000)
    
    finalizarPedido()
}

const aceitarPedido = () => {
    icone.classList.remove('fa-burger')
    icone.classList.add('fa-thumbs-up')
    titulo.innerText = "Pedido Aceito!"
    subtitulo.innerText = "O restaurante já aceitou seu pedido e logo começará o preparo."
    pintarBarra(2)
}

const prepararPedido = () => {
    icone.classList.remove('fa-thumbs-up')
    icone.classList.add('fa-utensils')
    titulo.innerText = "Pedido em Preparo!"
    subtitulo.innerText = "O seu pedido está sendo feito. Logo sairá para entrega."
    pintarBarra(3)
}

const entregarPedido = () => {
    icone.classList.remove('fa-utensils')
    icone.classList.add('fa-truck-fast')
    titulo.innerText = "Pedido saiu para Entrega!"
    subtitulo.innerText = "O seu pedido está indo para sua residencia!"
    pintarBarra(4)
}

const finalizarPedido = () => {
    icone.classList.remove('fa-truck-fast')
    icone.classList.add('fa-check')
    titulo.innerText = "Pedido foi Entregue!"
    subtitulo.innerText = "Aproveite seu pedido!"
    pintarBarra(5)
}

const pintarBarra = (barra) => {
    document.querySelector(`.b${barra}`).style.backgroundColor = "#ccff00"
}