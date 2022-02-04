// variáveis globais
numeroCartas = null;
let game = document.querySelector(".game");
let gifsAround = [];
let gifs = [
    "bobrossparrot.gif",
    "explodyparrot.gif",
    "fiestaparrot.gif",
    "front.png",
    "metalparrot.gif",
    "revertitparrot.gif",
    "tripletsparrot.gif",
    "unicornparrot.gif"
]

// funcao que embaralha arrays
function comparador() { 
    return Math.random() - 0.5; 
}

// validar se o numero de cartas digitado é valido
escolherNumeroCartas(); 
function escolherNumeroCartas(){

    numeroCartas = prompt("com quantas cartas você deseja jogar?");
    if ( numeroCartas <4 || numeroCartas > 16 || (numeroCartas%2) !== 0){
    } else{
        embaralhar()
    }
    return parseInt(numeroCartas);
}

// embaralhar
function embaralhar(){
    gifs.sort(comparador);    
    for(let i = 0; i < (numeroCartas/2); i++){
        gifsAround.push(gifs[i])
    }
    for(let j = 0; j < (numeroCartas/2); j++){
        gifsAround.push(gifsAround[j]);
    }
    gifsAround.sort(comparador);
    console.log(gifsAround);
    inserirCartas();
}

// inserir as cartas no html pelo javascript
function inserirCartas (){
    for(let i = 0; i < numeroCartas; i++){
        // for(let j = 0; j < ((numeroCartas)/2) ; j++){
        game.innerHTML += `
        <div class='card flip'>
            <div class='front' onclick = 'inserirGif(this)'></div>
            <div class='back'><img src='./assets/${gifsAround[i]}'></div>
        </div>`;
        // }
    }
}

// virar as cartas
function inserirGif(front){
    let back = front.parentNode;
    back.classList.toggle("flip");
}
