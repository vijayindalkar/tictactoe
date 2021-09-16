// First i will create an enpty array 
// function to check weather is it empty or not 
// if empty start
// function to assign value to position in array e.g [0][0] = 1, [0][1] = 2
// ask users the position where to put  X and 0 
// [(0,0)|(0,1)|(0,2)]       [1|2|3]
// [(1,0)|(1,1)|(1,2)]       [4|5|6]  user input will be 1,2,3.....
// [(2,0)|(2,1)|(2,2)]       [7|8|9]
// function to show the board as we will show the board multiple times to the users while they are playing.
// function to check a set of pattern every time 
// already Filled position (again ask user to another posi)
// if the matches the following user Win   otherwise it will tie 



var gameStillOn = true;
var winner = none;
playerOne = "X"
var arr = [
    ["-","-","-"],
    ["-","-","-"],
    ["-","-","-"],
 ]; 


 function dispArr(){
    for(let i = 0; i <=arr.length ; i++) {
            document.write(emptyboard[i] + "<br>");
        }
 }




function isEmpty(){
    // if (emptyboard == newBoard){
    //     return true;
    // }
    // else{
    //     return false;
    // }
}


function startGameSinglePlayer(){
    // for(let posi = 0;posi <= 9;posi++){

    //     winArrayX.push(window.prompt("X' turn | Enter Location : "));
        
    // for(let i = 0; i < emptyboard.length; i++) {
         
    //      document.write(emptyboard[i] + "<br>");
    //  }
}




function startGameMultiplayer(){
    
    // winArrayX.push(window.prompt("X' turn | Enter Location : "));  
    // winArrayO.push(window.prompt("O' turn | Enter Location : "));
    
    // for(let i = 0; i <=9 ; i++) {
        
    //     document.write(emptyboard[i] + "<br>");
    // } 

    dispArr();
    while(gameStillOn){
        nextTurn(current_player);
        checkGameStatus();
        changePlayer();
        if(winner == "X" || winner == "O"){
            document.write(winner + " won.");
        }
        else if(winner == None){
        document.write("Tie.");
        }
}


}   //end of startmultiplayerGame 




function nextTurn(player){
    document.write(player + "'s turn.")
    var position = window.prompt("Choose a position from 1-9: ");
    var valid = False;
    while(!valid){
        while(position = !["1", "2", "3", "4", "5", "6", "7", "8", "9"])
        position = input("Choose a position from 1-9: ");
    }
    position = parseInt(position) - 1;
    
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

function toAssignInput(){
// function to assign value to position in array e.g [0][0] = 1, [0][1] = 2


}

function tocheckPattern(){
// function to check a set of pattern every time 


}

function checkrows(){
    row1 = emptyboard[0] == emptyboard[1] == emptyboard[2] != "-";
    row2 = emptyboard[3] == emptyboard[4] == emptyboard[5] != "-";
    row3 = emptyboard[6] == emptyboard[7] == emptyboard[8] != "-";

    if(row_1 || row_2 || row_3){
        gamestillon = False;
    }

}
