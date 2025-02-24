function saudacao(nome, mensagem) {
  exibirResultado('Olá, Visitante! Bem-vindo!');
}
function obterTexto() {
  let valid = document.getElementById('nome');
  let valid1 = document.getElementById('men');

  if (valid instanceof HTMLInputElement && valid1 instanceof HTMLInputElement) {
    let nome = valid.value;
    let men = valid1.value;

    if (!nome && !men) {
      saudacao();
    } else {
      exibirResultado('Olá, ' + nome + ' Sua mensagem é: ' + men);
    }
  }
}
function exibirResultado(resultado) {
  let saida = document.getElementById('resultado');
  if (saida instanceof HTMLElement) {
    saida.textContent = saida.textContent = resultado;
  }
}
