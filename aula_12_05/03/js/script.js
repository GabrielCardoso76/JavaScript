function configurar() {
    let validarBtn = document.getElementById('validarBtn');
    let validarSenha = document.getElementById('senha');

    //prettier-ignore
    if((validarBtn instanceof HTMLButtonElement) && (validarSenha instanceof HTMLInputElement)) {
      validarBtn.addEventListener('click',() =>{
        ValidarSenha(validarSenha.value);
      });
    }
  }

function ValidarSenha(senha){
    
    const senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,16}$/;

    if(!senha){
        return alert("Digite uma senha");
    }

    if(senhaRegex.test(senha)){
        return alert('Senha Valida!')
    }else{
        return alert('Senha Invalida!')
    }
}

document.addEventListener('DOMContentLoaded', configurar);