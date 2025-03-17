let arrayTarefa = [];

function exibirConteudo() {
    let saida = document.getElementById('resultado');
    if (saida instanceof HTMLParagraphElement) {
        saida.innerHTML = '';  
        arrayTarefa.forEach(tarefa => {
            let paragrafo = document.createElement('li');
            paragrafo.textContent = tarefa; 
            saida.appendChild(paragrafo);  
        });
    }
}

function removerTarefaEscolhida(tarefa) {
    let i = arrayTarefa.indexOf(tarefa);
    if (i !== -1) {
        arrayTarefa.splice(i, 1);  
        exibirConteudo();  
    } else {
        alert('Tarefa não encontrada!');
    }
}

function removerTarefa() {
    if (arrayTarefa.length > 0) {
        arrayTarefa.pop(); 
        exibirConteudo(); 
    }else{
        alert("Não existem tarefas cadastradas!");
    }
}

function cadastrarTarefa(tarefa) {
    if (tarefa) {
    
        if (arrayTarefa.includes(tarefa)) {
            alert("Tarefa repetida");
        } else {
            arrayTarefa.push(tarefa);  
            exibirConteudo();  
        }
    } else {
        alert("Por Favor, insira uma tarefa válida.");
    }
}

const configurarTarefas = () => {
    let entradaTarefa = document.getElementById('tarefa');
    let cadastrarTarefaBtn = document.getElementById('cadastrarTarefaBtn');
    let removerTarefaBtn = document.getElementById('removerTarefaBtn');
    let tarefaEscolhida = document.getElementById('tarefaRemovida');  
    let removerTarefaEscolhidaBtn = document.getElementById('removerTarefaEscolhidaBtn');

    if (cadastrarTarefaBtn instanceof HTMLButtonElement && entradaTarefa instanceof HTMLInputElement) {
        cadastrarTarefaBtn.addEventListener('click', () => {
            cadastrarTarefa(entradaTarefa.value);  
            entradaTarefa.value = ''; 
        });
    }

    if (removerTarefaEscolhidaBtn instanceof HTMLButtonElement && tarefaEscolhida instanceof HTMLInputElement) { 
        removerTarefaEscolhidaBtn.addEventListener('click', () => {
            removerTarefaEscolhida(tarefaEscolhida.value);  
            tarefaEscolhida.value = '';
        });
    }

    if (removerTarefaBtn instanceof HTMLButtonElement) {
        removerTarefaBtn.addEventListener('click', () => {
            removerTarefa(); 
        });
    }
}

document.addEventListener('DOMContentLoaded', configurarTarefas);  