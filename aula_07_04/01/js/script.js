function verificar() {
    let idadeInput = document.getElementById('idade');

    if (idadeInput instanceof HTMLInputElement) {
        let idade = parseInt(idadeInput.value);
        try {
            if (isNaN(idade)) {
                throw new Error('Idade invalida.');
            } else if (idade < 0) {
                throw new Error('Idade invalida (Negativa).');
            } else if (idade < 18) {
                throw new Error('Idade invalida (Menor que 18).');
            }else if(idade > 150){
                throw new Error('Idade invalida(Semi-Deus).')
            }
            console.log("Idade aprovada safadinho");
        } catch (error) {
            console.log(error.message);
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const botao = document.getElementById('verificar');
    if (botao) {
        botao.addEventListener('click', verificar);
    }
});
