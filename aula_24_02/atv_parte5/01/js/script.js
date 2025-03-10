const saudacao = (nomePadrao, mensagemPadrao) => {
  let saida = document.getElementById('resultado');
  if (saida instanceof HTMLParagraphElement) {
    saida.textContent = `Olá ${nomePadrao}! ${mensagemPadrao}!`;
  }
};

function cliqueBotao(nomeInput, mensagemInput) {
  if (
    nomeInput instanceof HTMLInputElement &&
    mensagemInput instanceof HTMLInputElement
  ) {
    let nome = nomeInput.value;
    let mensagem = mensagemInput.value;

    nome = nome === '' ? 'Visitante' : nome;
    mensagem = mensagem === '' ? 'Bem-vindo' : mensagem;
    saudacao(nome, mensagem);
  }

  const configurarEventoSaudacao = () => {
    let nome = document.getElementById('nome');
    let mensagem = document.getElementById('men');
    let exibirBtn = document.getElementById('exibirBtn');

    if (exibirBtn instanceof HTMLButtonElement) {
      exibirBtn.addEventListener('click', () => {
        cliqueBotao(nome, mensagem);
      });
    }
  };

  document.addEventListener('DOMContentLoaded', configurarEventoSaudacao);
}
//tchau
//tchau
//tchau
//tchau
/* function saudacao() {
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
 */
