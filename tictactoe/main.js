function startGameSinglePlayer(){
    var emptyboard = [
        ["","",""],
        ["","",""],
        ["","", ""],
        ["","",""],
     ]; 
     for(var i = 0; i < emptyboard.length; i++) {
         document.write(emptyboard[i] + "<br>");
     }    
}

function startGameMultiplayer(){
    var emptyboard = [
        ["","",""],
        ["","",""],
        ["","",""],
        ["","",""],
     ]; 
     for(var i = 0; i < emptyboard.length; i++) {
         document.write(emptyboard[i] + "<br>");
     }    
    
}

function nextStep(){
    let select = document.getElementById("numberOfPlayers");
    if(select.options[select.selectedIndex].value == 1){
        startGameSinglePlayer();
    }
    else{
        startGameMultiplayer();
    }
}
