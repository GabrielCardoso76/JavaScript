function calcularDesconto(preco, desconto) {
  if (!desconto || desconto === 0) {
    return preco * 0.9;
  } else {
    let valorDesconto = preco * (desconto / 100);
    let precoComDesconto = preco - valorDesconto;
    return precoComDesconto;
  }
}

function calcular() {
  let valid = document.getElementById('preco');
  let valid1 = document.getElementById('desconto');

  if (valid instanceof HTMLInputElement && valid1 instanceof HTMLInputElement) {
    let preco = parseFloat(valid.value);
    let desconto = parseFloat(valid1.value);
    let resultado = document.getElementById('resultado');

    if (resultado != null) {
      exibirResultado(calcularDesconto(preco, desconto));
    }
  }
}
function exibirResultado(resultado) {
  let saida = document.getElementById('resultado');
  if (saida instanceof HTMLElement) {
    saida.textContent = saida.textContent = resultado;
  }
}
