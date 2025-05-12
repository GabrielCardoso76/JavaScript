function configurar() {
    let validarBtn = document.getElementById('validarBtn');
    let validarNome = document.getElementById('validarNome');

    //prettier-ignore
    if((validarBtn instanceof HTMLButtonElement) && (validarNome instanceof HTMLInputElement)) {
      validarBtn.addEventListener('click',() =>{
        ValidarNome(validarNome.value);
        
      });
    }
  }

function ValidarNome(nome){
    let Exprecao_regular = /^[A-Za-z]+( [A-Za-z]+)+$/;

    if(Exprecao_regular.test(nome)){
        return alert(`Nome:${nome} é Valido!`)
    }else {
        return alert(`Nome:${nome} não é Valido!`)
    }

}
















document.addEventListener('DOMContentLoaded', configurar);