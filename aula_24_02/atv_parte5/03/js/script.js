const verificarPar1 = (numero) => {
  let resultado;
  if (numero % 2 == 0) {
    resultado = 'O número Par';
  } else {
    resultado = 'O número Impar';
  }

  exibirResultado(resultado);
};

function verificar() {
  let num = document.getElementById('num');

  if (num instanceof HTMLInputElement) {
    let numero = Number(num.value);

    verificarPar1(numero);
  }
}

function exibirResultado(resultado) {
  let saida = document.getElementById('resultado');
  if (saida instanceof HTMLElement) {
    saida.textContent = resultado;
  }
}
