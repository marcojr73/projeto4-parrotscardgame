// variáveis globais
numberCards = null;
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
let cardOne;
let cardTwo;
let winner = 0;
let seconds = -1;

// relógio
setInterval(attTimer,1000)
function attTimer(){
    seconds++;
    document.querySelector("p").innerHTML = seconds + " segundos";
}

// funcao que embaralha arrays
function comparador() { 
    return Math.random() - 0.5; 
}

// validar se o numero de cartas digitado é valido
chooseCards(); 
function chooseCards(){
    numberCards = prompt("com quantas cartas você deseja jogar?");
    if ( numberCards <4 || numberCards > 14 || (numberCards%2) !== 0){
        chooseCards(); 
    } else{
        embaralhar();
    }
    return parseInt(numberCards);
}

// embaralhar
function embaralhar(){
    gifs.sort(comparador);    
    for(let i = 0; i < (numberCards/2); i++){
        gifsAround.push(gifs[i])
    }
    for(let j = 0; j < (numberCards/2); j++){
        gifsAround.push(gifsAround[j]);
    }
    gifsAround.sort(comparador);
    insertCards();
}

// inserir as cartas no html pelo javascript
function insertCards (){
    for(let i = 0; i < numberCards; i++){
        game.innerHTML += `
        <div class='card flip' onclick = 'funcaoWaiter(this, gifsAround[${[i]}])' data-identifier="card">
            <div class='front' identifier="front-face"></div>
            <div class='back' data-identifier="back-face"><img src='./assets/${gifsAround[i]}'></div>
        </div>`;
    }
}

//funçao que chama outras funcoes e repassa a div da frontal da carta como parametro
function funcaoWaiter(card, gif){
    flipCard(card);
    selectCards(gif, card);
}

// virar as cartas
function flipCard(front){
    front.classList.remove("flip");
}
// esconder as cartas
function noFlipCard(){
    cardOne.classList.add("flip");   
    cardTwo.classList.add("flip");
}

// ---------------------------  fazer o uso das regras do game ---------------------------//

// preencher as escolhas de cartas
function selectCards(gif, card) {
   if(firstChoice == null){
       firstChoice = gif;
       round++;
       cardOne = card;
   }else{
       secondChoice = gif;
       round++;
       cardTwo = card;
   }
   findPair();
}

//verificar se o usuário acertou
function findPair(){
    if(round%2 == 0){
        if(firstChoice !== secondChoice){
            firstChoice = null;
            setTimeout(noFlipCard,1000);
        }else{
            firstChoice = null;
            secondChoice = null;
            winner++;
            setTimeout(findWinner, 1000)
        }
    }
}

//verificar se o usuário encontrou todos os pares
function findWinner(){
    if(winner == (numberCards/2)){
        alert(`Parabens, voce venceu em ${seconds} segundos`);
        let playAgain = prompt("deseja reiniciar o jogo?");{
            if(playAgain == "sim"){
                firstChoice = null;
                secondChoice = null;
                round = 0;
                winner = 0;
                seconds = -1;
                game.innerHTML="";
                gifsAround=[];
                chooseCards();
            }
        }
    }
}