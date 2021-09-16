// First i will create an enpty array 
// function to check weather is it empty or not 
// function to assign value to position in array e.g [0][0] = 1, [0][1] = 2
// ask users the position where to put  X and 0 
// [(0,0)|(0,1)|(0,2)]       [1|2|3]
// [(1,0)|(1,1)|(1,2)]       [4|5|6]  user input will be 1,2,3.....
// [(2,0)|(2,1)|(2,2)]       [7|8|9]

// function to check a set of pattern every time 
// already Filled position 
// if the matches the following user Win   otherwise it will tie 

var emptyboard = [
    ["","",""],
    ["","",""],
    ["","",""],
 ]; 

function isEmpty(){
    if (emptyboard == newBoard){
        return true;
    }
    else{
        return false;
    }
}


function startGameSinglePlayer(){
    for(let posi = 0;posi <= 9;posi++){

        winArrayX = window.prompt("X' turn | Enter Location : ");
        
        winArrayO = window.prompt("O' turn | Enter Location : ");
    // for(let i = 0; i < emptyboard.length; i++) {
         
    //      document.write(emptyboard[i] + "<br>");
    //  }
}

function toAssignInput(){
// function to assign value to position in array e.g [0][0] = 1, [0][1] = 2

}

function tocheckPattern(){
// function to check a set of pattern every time 
}



function startGameMultiplayer(){
    
     for(let i = 0; i < emptyboard.length; i++) {
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

