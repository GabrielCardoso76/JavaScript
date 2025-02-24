function obterNumeros() {
  let valid = document.getElementById('raiz');

  if (valid instanceof HTMLInputElement) {
    let raiz = parseFloat(valid.value); // Garante que o valor seja convertido para um número
    return { raiz };
  }
  return { raiz: 0 }; // Retorna valores padrão se houver erro
}

function exibirResultado(resultado) {
  let saida = document.getElementById('resultado');
  if (saida instanceof HTMLElement) {
    saida.textContent = resultado;
  }
}

const raiz = function (a) {
  console.log(Math.sqrt(a));
  return Math.sqrt(a);
};

const exponencial = function (a) {
  console.log(Math.pow(a, a));
  return Math.pow(a, a);
};

function calcular(operacao) {
  let numeros = obterNumeros(); // Chamada da função e armazenamento do retorno
  let num1 = numeros.raiz; // Atribuição explícita para num1
  let resultado;

  switch (operacao) {
    case 'raiz':
      resultado = raiz(num1);
      break;
    case 'exponencial':
      resultado = exponencial(num1);
      break;
    default:
      resultado = 'Operação inválida!';
  }

  exibirResultado(resultado);
}
