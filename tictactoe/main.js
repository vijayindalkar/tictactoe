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
var winner = null;
playerOne = "X"
var arr = [
    ["-","-","-"],
    ["-","-","-"],
    ["-","-","-"],
 ]; 
// Driver Code
 function nextStep(){
    let select = document.getElementById("numberOfPlayers");
    if(select.options[select.selectedIndex].value == 1){
        startGameSinglePlayer();
    }
    else{
        startGameMultiplayer();
    }
}
 
 
 
 
 function dispArr(){
    for(let i = 0; i <=arr.length ; i++) {
            document.write(emptyboard[i] + "<br>");
        }
 }




function isEmpty(){
    if (emptyboard == newBoard){
        return true;
    }
    else{
        return false;
    }
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
        else if(winner == null){
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
        position = parseInt(position) - 1;
        if(position  == "-"){    // Check whether Spot is available or not on array 
        valid = True;       
        }
        else{
            document.write("Place Already taken")
        }
    }
    arr[position] = player;
    dispArr();
}

function checkIfGameOver(){
    checkForWinner();
    checkForTie();
}

function checkForWinner(){
    var winner;
    rowWinner = checkRows();
    columnWinner = checkColumns();
    diagonalWinner = checkDiagonals();
    if (rowWinner) {
        winner = rowWinner;
    }
    else if(columnWinner){
        winner = columnWinner;
    }
    else if (diagonalWinner){
        winner = diagonalWinner;
    }
    else{
        winner = None;
    }
}



function checkRows(){
    row1 = emptyboard[0][0] == emptyboard[0][1] == emptyboard[0][2] != "-";
    row2 = emptyboard[1][0] == emptyboard[1][1] == emptyboard[1][2] != "-";
    row3 = emptyboard[2][0] == emptyboard[2][1] == emptyboard[2][2] != "-";

    if(row1 || row2 || row3){
        gamestillon = False;
    }
    if(row_1){
        return arr[0][0];
    }
    else if(row2){
        return arr[1][0];
    }
    else if (row3){
        return arr[1][2];
    }
    else{
        winner = Null;
    }

}

function checkDiagonals(){
    dig1 = emptyboard[0][0] == emptyboard[1][2] == emptyboard[2][2] != "-";
    dig2 = emptyboard[0][2] == emptyboard[1][2] == emptyboard[2][1] != "-";
    

    if(dig1 || dig2 ){
        gamestillon = False;
    }
    if(dig1){
        return arr[0][0];
    }
    else if(dig2){
        return arr[0][2];
    }
    else{
        winner = Null;
    }


}

function checkColumns(){
    col1 = emptyboard[0][0] == emptyboard[1][0] == emptyboard[2][0] != "-";
    col2 = emptyboard[0][1] == emptyboard[1][1] == emptyboard[2][1] != "-";
    col3 = emptyboard[0][2] == emptyboard[1][2] == emptyboard[2][2] != "-";

    if(col1 || col2 || col3){
        gamestillon = False;
    }
    if(col1){
        return arr[0][0];
    }
    else if(col2){
        return arr[0][1];
    }
    else if (col3){
        return arr[0][2] ;
    }
    else{
        winner = None;
    }
}


function checkForTie(){
    var gamestillon;
}

function flip_player(){
    var current_player;
    if (current_player == "X"){
    current_player = "O";
    }
    else if(current_player == "O"){
        current_player = "X";
    }
}
