numeroCartas = null;
let game = document.querySelector(".game");
let cards = [
    "bobrossparrot.gif",
    "desktop.png",
    "explodyparrot.gif",
    "fistaparrot.gif",
    "front.png",
    "metalparrot.png",
    "mobile.png",
    "revertparrot.gif",
    "triplesparrot.gif",
    "unicornparrot.gif"
]
// validar se o numero de cartas digitado é valido
escolherNumeroCartas();
function escolherNumeroCartas(){

    numeroCartas = prompt("com quantas cartas você deseja jogar?");
    if ( numeroCartas <4 || numeroCartas > 16 || (numeroCartas%2) !== 0){
    escolherNumeroCartas();    
    } else{
        inserirCartas();
    }
    
}

// inserir as cartas no html pelo javascript

function inserirCartas (){
    for(let i = 0; i < numeroCartas; i++){
        game.innerHTML += "<div class='card' onclick = 'inserirGif()'></div>"
    }
}

function inserirGif(){
    card = document.querySelector"card");
    for(let i = 0; i<numeroCartas; i++){
        card.innerHTML += `<img src = './assets/${cards[0]}'  class ='parrot'></img> `
    }
}