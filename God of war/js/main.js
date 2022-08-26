const mainPersonagem = document.querySelector('.main__personagens--sombra');



function getPersonagens(){
    return fetch('js/personagens.json')
        .then(data => data.json())
        .catch(erro => console.log(erro))
}

async function mostrarPersonagem(){
    const personagens = await getPersonagens();
    personagens.map(personagem => {

        const mainSobrePersonagem = document.createElement('div');
        mainSobrePersonagem.setAttribute('class', 'sombra__personagem');
        
        const personagemDados = document.createElement('div');
        personagemDados.setAttribute('class','personagem__dados');
        
        const imagemPrincipal = document.createElement('img');
        
        const personagemDadosTextos = document.createElement('div');
        personagemDadosTextos.setAttribute('class', 'personagem__dados--textos')
        
        const nomePersonagem = document.createElement('h2');
        const descricaoPersonagem = document.createElement('p');
        
        const tituloGifs = document.createElement('h2');
        tituloGifs.textContent = 'Gifs';
        
        const personagemGifs = document.createElement('div');
        personagemGifs.setAttribute('class','personagem__gifs');
    
    nomePersonagem.textContent = personagem.nome;
    descricaoPersonagem.textContent = personagem.descricao;

    personagemDadosTextos.appendChild(nomePersonagem);
    personagemDadosTextos.appendChild(descricaoPersonagem);
    imagemPrincipal.setAttribute('src',personagem.foto)

    personagemDados.appendChild(imagemPrincipal);
    personagemDados.appendChild(personagemDadosTextos);

    mainSobrePersonagem.appendChild(personagemDados);
    mainSobrePersonagem.appendChild(tituloGifs);
    mainPersonagem.appendChild(mainSobrePersonagem)
    personagem.gifs.map(gif => {
        const imagemGif = document.createElement('img');
        imagemGif.setAttribute('class', 'video__gif1');
        imagemGif.setAttribute('src', gif);
        personagemGifs.appendChild(imagemGif);
        mainSobrePersonagem.appendChild(personagemGifs)
    })
    
    })
}

mostrarPersonagem()