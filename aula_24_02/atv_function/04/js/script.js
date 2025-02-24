function obterNumeros() {
  let valid = document.getElementById('num');

  if (valid instanceof HTMLInputElement) {
    let num = parseInt(valid.value);
    return { num };
  }
  return { num: 0 }; // Retorna valores padrão se houver erro
}

function exibirResultado(resultado) {
  let saida = document.getElementById('resultado');
  if (saida instanceof HTMLElement) {
    saida.textContent = resultado;
  }
}
const numero = function (num) {
  return (
    parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)
  );
};
function calcular(operacao) {
  let numeros = obterNumeros(); // Chamada da função e armazenamento do retorno
  let num1 = numeros.num; // Atribuição explícita para num1
  let resultado;

  switch (operacao) {
    case 'num':
      resultado = numero(num1);
      break;
    default:
      resultado = 'Operação inválida!';
  }

  exibirResultado(resultado);
}
