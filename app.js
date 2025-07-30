//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = []; 
let nome; 


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function limparCampo() {
    texto = document.querySelector('input');
    texto.value = '';
}

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

let amigoSorteado; 

function sortearAmigo(lista){
  let indiceItemSorteado = Math.floor(Math.random() * amigos.length);
  amigoSorteado = amigos[indiceItemSorteado];
  //console.log(amigoSorteado); 
  exibirTextoNaTela('h4', `O amigo sorteado é: ${amigoSorteado}`); 
  //limpar a ul. 
  exibirTextoNaTela('ul', ''); 

}
