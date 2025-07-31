//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


// Declaração de variáveis e listas
let amigos = []; 
let nome; 
let amigoSorteado; 

// Funções:
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

     if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

// exibirResultado
function exibirResultado(texto) {
    const campoResultado = document.querySelector(".result-list");
    campoResultado.textContent = texto; // ou innerHTML se quiser HTML

     if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}


function limparCampo() {
    texto = document.querySelector('input');
    texto.value = '';
}

// adicionarAmigo : a função recebe um nome pelo imput (campo de texto - index.html). 
// Validação : Caso o campo esteja vazio, exibirá uma mensagem. Do contrário, incluirá 
// o nome na lista

function adicionarAmigo(){
 
    exibirTextoNaTela('h4', ''); 
    nome = document.querySelector('input').value; 

    if(nome == ""){
        exibirTextoNaTela('h4', 'Digite um nome válido')

    }else{
        exibirTextoNaTela('h4', '')
        amigos.push(nome); 
    }
    limparCampo()
listarAmigos()
}

// listarAmigos : imprime a lista atualizada a cada vez que for inserido um nome na lista. 
function listarAmigos(){

    let lista = document.getElementById('listaAmigos');
    console.log(lista)
    lista.innerHTML = "";

    
    for (let i = 0; i < amigos.length; i++){
        let item = document.createElement('ul'); 
        item.textContent = amigos[i]; 
        
        lista.appendChild(item);
        console.log(item)
    }
  
}

// sortearAmigo : sorteia um item da lista via função math.random()

function sortearAmigo(lista){
  let indiceItemSorteado = Math.floor(Math.random() * amigos.length);
  amigoSorteado = amigos[indiceItemSorteado];
  //console.log(amigoSorteado); 
  exibirResultado(`O amigo sorteado é: ${amigoSorteado}`); 

  //limpar a ul. 
  exibirTextoNaTela('ul', ''); 

}
