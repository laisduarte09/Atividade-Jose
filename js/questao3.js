document.addEventListener('DOMContentLoaded', () => {
  const botao = document.querySelector('.botao-pedido');
  const fundo = document.getElementById('modal') || document.querySelector('.fundo-escuro');
  const closeBtn = document.querySelector('.topo i');
  const icone = document.querySelector('.icone');
  const titulo = document.querySelector('.titulo');
  const subtitulo = document.querySelector('.subtitulo');
  const barras = Array.from(document.querySelectorAll('.barras .barra'));
  let pedidoEmAndamento = false;

  const esperar = ms => new Promise(r => setTimeout(r, ms));

  const abrirFlutuante = () => {
    if (!fundo || pedidoEmAndamento) return;
    fundo.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    if (botao) botao.disabled = true;
    pedidoEmAndamento = true;
    resetUI();
    pintarBarra(1);
    fazerPedido().finally(() => {
      pedidoEmAndamento = false;
      if (botao) botao.disabled = false;
    });
  };

  const fecharFlutuante = () => {
    if (!fundo) return;
    fundo.style.display = 'none';
    document.body.style.overflow = '';
    resetUI();
  };

  async function fazerPedido() {
    await esperar(3000);
    aceitarPedido();
    await esperar(3000);
    prepararPedido();
    await esperar(10000);
    entregarPedido();
    await esperar(5000);
    finalizarPedido();
  }

  function aceitarPedido() {
    if (icone) {
      icone.classList.remove('fa-burger', 'fa-thumbs-up', 'fa-utensils', 'fa-truck-fast', 'fa-check');
      icone.classList.add('fa-thumbs-up');
    }
    if (titulo) titulo.innerText = "Pedido Aceito!";
    if (subtitulo) subtitulo.innerText = "O restaurante já aceitou seu pedido e logo começará o preparo.";
    pintarBarra(2);
  }

  function prepararPedido() {
    if (icone) {
      icone.classList.remove('fa-burger', 'fa-thumbs-up', 'fa-utensils', 'fa-truck-fast', 'fa-check');
      icone.classList.add('fa-utensils');
    }
    if (titulo) titulo.innerText = "Pedido em Preparo!";
    if (subtitulo) subtitulo.innerText = "O seu pedido está sendo feito. Logo sairá para entrega.";
    pintarBarra(3);
  }

  function entregarPedido() {
    if (icone) {
      icone.classList.remove('fa-burger', 'fa-thumbs-up', 'fa-utensils', 'fa-truck-fast', 'fa-check');
      icone.classList.add('fa-truck-fast');
    }
    if (titulo) titulo.innerText = "Pedido saiu para Entrega!";
    if (subtitulo) subtitulo.innerText = "O seu pedido está indo para sua residência!";
    pintarBarra(4);
  }

  function finalizarPedido() {
    if (icone) {
      icone.classList.remove('fa-burger', 'fa-thumbs-up', 'fa-utensils', 'fa-truck-fast', 'fa-check');
      icone.classList.add('fa-check');
    }
    if (titulo) titulo.innerText = "Pedido foi Entregue!";
    if (subtitulo) subtitulo.innerText = "Aproveite seu pedido!";
    pintarBarra(5);
  }

  function pintarBarra(numero) {
    if (!barras || barras.length === 0) return;
    const el = barras[numero - 1];
    if (el) el.style.backgroundColor = '#707da8';
  }

  function resetUI() {
    if (icone) {
      icone.classList.remove('fa-thumbs-up', 'fa-utensils', 'fa-truck-fast', 'fa-check');
      icone.classList.add('fa-burger');
    }
    if (titulo) titulo.innerText = "Pedido Confirmado!";
    if (subtitulo) subtitulo.innerText = "Aguardando o restaurante aceitar...";
    barras.forEach(b => b.style.backgroundColor = '#ffffff');
  }

  if (botao) botao.addEventListener('click', abrirFlutuante);
  if (closeBtn) closeBtn.addEventListener('click', fecharFlutuante);

  if (fundo) {
    fundo.addEventListener('click', (e) => {
      if (e.target === fundo) fecharFlutuante();
    });
  }

  resetUI();
});