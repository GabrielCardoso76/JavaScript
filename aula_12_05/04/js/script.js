function configurar() {
    let validarBtn = document.getElementById('validarBtn');
    let validarCodigo = document.getElementById('codigo');

    //prettier-ignore
    if((validarBtn instanceof HTMLButtonElement) && (validarCodigo instanceof HTMLInputElement)) {
      validarBtn.addEventListener('click',() =>{
        ValidarCodigo(validarCodigo.value);
      });
    }
  }

function ValidarCodigo(codigo){
    const codigoRegex = /^[A-Z]{3}-\d{4}$/;


    if(!codigo){
        return alert("Digite um codigo");
    }

    if(codigoRegex.test(codigo)){
        return alert('Codigo de Produto VALIDO!')
    }else{
        return alert('Codigo de Produto INVALIDO!')
    }
}

document.addEventListener('DOMContentLoaded', configurar);