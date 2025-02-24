function obterTexto() {
  let valid = document.getElementById('texto');

  if (valid instanceof HTMLInputElement) {
    let texto = valid.value;
    return { texto };
  }
  return { texto: 0 }; // Retorna valores padrão se houver erro
}
function exibirResultado(resultado) {
  let saida = document.getElementById('resultado');
  if (saida instanceof HTMLElement) {
    saida.textContent = saida.textContent =
      'Quantidade de vogais nesse texto é : ' + resultado;
  }
}
const texto = function (texto) {
  const regex = /[aeiouAEIOU]/g; // Regex para capturar vogais
  const resultado = texto.match(regex); // Encontra todas as vogais no texto
  return resultado ? resultado.length : 0; // Retorna a quantidade de vogais
};
function calcular(operacao) {
  let numeros = obterTexto();
  let texto1 = numeros.texto;
  let resultado;

  switch (operacao) {
    case 'texto':
      resultado = texto(texto1);
      break;
    default:
      resultado = 'Operação inválida!';
  }
  exibirResultado(resultado);
}
