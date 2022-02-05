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
let firstChoice = null;
let secondChoice = null;
let round = 0;

// funcao que embaralha arrays
function comparador() { 
    return Math.random() - 0.5; 
}

// validar se o numero de cartas digitado é valido
escolherNumeroCartas(); 
function escolherNumeroCartas(){

    numeroCartas = prompt("com quantas cartas você deseja jogar?");
    if ( numeroCartas <4 || numeroCartas > 14 || (numeroCartas%2) !== 0){
        escolherNumeroCartas(); 
    } else{
        embaralhar();
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
    // console.log(gifsAround);
    inserirCartas();
}

// inserir as cartas no html pelo javascript
function inserirCartas (){
    for(let i = 0; i < numeroCartas; i++){
        game.innerHTML += `
        <div class='card flip'>
            <div class='front' onclick = 'funcaoGarcon(this, gifsAround[${[i]}])'></div>
            <div class='back'><img src='./assets/${gifsAround[i]}'></div>
        </div>`;
    }
}

//funçao que chama outras funcoes e repassa a div da frontal da carta como parametro
function funcaoGarcon(card, gif){
    flipCard(card);
    selectCards(gif);
}

// virar as cartas
function flipCard(front){
    let back = front.parentNode;
    back.classList.remove("flip");
}
// nao virar as cartas
function noFlipCard(card){
    let back = card.parentNode;
    back.classList.add("flip");
}

// fazer o uso das regras do game

// preencher as escolhas de cartas
function selectCards(gif) {
   if(firstChoice == null){
       firstChoice = gif;
       console.log("1");
       round++;
   }else{
       secondChoice = gif;
       console.log("2");
       round++;
   }
   findPair();
}

//verificar se o usuário acertou
function findPair(){
    if(round%2 == 0){
        if(firstChoice !== secondChoice){
            alert("you lose" + round);
            firstChoice = null;
        }else{
            firstChoice = null;
            secondChoice = null;
            alert("you win" + round);
        }
    }
}