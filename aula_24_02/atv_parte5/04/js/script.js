const calcularQuadrado = (numero) => {
  return (numero = numero * numero);
};

function aplicarOperacao(numInput, calcularQuadrado) {
  if (numInput instanceof HTMLInputElement) {
    let numero = Number(numInput.value);
    exibirResultado(calcularQuadrado(numero));
  }
}

function exibirResultado(resultado) {
  let saida = document.getElementById('resultado');
  if (saida instanceof HTMLElement) {
    saida.textContent = resultado;
  }
}

function main() {
  let validB = document.getElementById('botao');

  if (validB instanceof HTMLButtonElement) {
    validB.addEventListener('click', () => {
      let numInput = document.getElementById('num');
      aplicarOperacao(numInput, calcularQuadrado);
    });
  }
}

document.addEventListener('DOMContentLoaded', main);
