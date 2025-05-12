function configurar() {
    let validarBtn = document.getElementById('validarBtn');
    let cpf = document.getElementById('cpf');
    let rg = document.getElementById('rg')
    //prettier-ignore
    if((validarBtn instanceof HTMLButtonElement) && (cpf instanceof HTMLInputElement) && (rg instanceof HTMLInputElement)) {
      validarBtn.addEventListener('click',() =>{
        ValidarCpfRG(cpf.value, rg.value);
      });
    }
  }

function ValidarCpfRG(cpf , rg){
    const cpfRegex = /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/;
    const rgRegex = /^\d{1,2}\.?\d{3}\.?\d{3}-?\d{1}$/;

    if(!rg || !cpf){    
        alert("insira os dois campos para Validar")
    }
    let resultCPF;
    if(cpfRegex.test(cpf)){
        resultCPF = "Valido"; 
    }else {
        resultCPF = "Invalido"; 
    }

    let resultRG;
    if(rgRegex.test(rg)){
        resultRG = "Valido"; 
    }else {
        resultRG = "Invalido"; 
    }
    return alert(`o RG è ${resultRG} é o CPF ${resultCPF}`);
}

document.addEventListener('DOMContentLoaded', configurar);