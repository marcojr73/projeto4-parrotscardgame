numeroCartas = null;
escolherNumeroCartas();
function escolherNumeroCartas(){

    numeroCartas = prompt("com quantas cartas você deseja jogar?");
    if ( numeroCartas <4 || numeroCartas > 16 || (numeroCartas%2) !== 0){
    escolherNumeroCartas();    
    } else{
        alert("sett");
    }
    
}
