function carregarPaginasHTML(){
    inserirConteudo('navbarConteudo', 'navbar.html');
    inserirConteudo('bodyConteudo', 'body.html');
}

async function inserirConteudo(idElement, localPagina) {
    let elemento = document.getElementById(idElement);

    if(elemento instanceof HTMLElement){
        try {
            let documentoConvertido = await carregarPaginas(localPagina);
            while(elemento.firstChild){
                elemento.removeChild(elemento.firstChild);
            }
            let conteudoBody = documentoConvertido.body;

            for(let no of conteudoBody.childNodes){
                let noClone = no.cloneNode(true);
                console.log(noClone);
                elemento.appendChild(noClone);
            }
        } catch (error) {
            let errorMessage = document.createElement('p');
            errorMessage.textContent = error.message;
            elemento.appendChild(errorMessage);
        
        }
    }
}
async function carregarPaginas(localPagina) {
    try {
        let resposta = await fetch(localPagina);
        let conteudo = await resposta.text();
        let domParser = new DOMParser();
        return domParser.parseFromString(conteudo, "text/html") 
    } catch (error) {
        throw new Error(`Erro ao carregar ${localPagina}: ${error.message}`);
    }    
}

document.addEventListener('DOMContentLoaded', carregarPaginasHTML);