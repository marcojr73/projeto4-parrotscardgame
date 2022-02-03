numeroCartas = null;
let game = document.querySelector(".game");
let gifs = [
    "bobrossparrot.gif",
    "explodyparrot.gif",
    "fistaparrot.gif",
    "front.png",
    "metalparrot.png",
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
        for(let j = 0; j < ((numeroCartas)/2) ; j++){
        game.innerHTML += `
        <div class='card flip'>
            <div class='front' onclick = 'inserirGif()'></div>
            <div class='back'><img src='./assets/${gifs[i]}'></div>
        </div>`;
        }
    }
}

function inserirGif(){
    let back = document.querySelectorAll(".card");
    back[0].classList.toggle("flip");
//     card = document.querySelectorAll(".back");
//     posicao.innerHTML = `<div class='back hidden'><img src='./assets/${gifs[0]}'></div>
//     </div>`;
}
