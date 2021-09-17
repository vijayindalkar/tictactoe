var player1 = "X";
var player2 = "O";
var currentTurn = player1;

function startGame() {

    for (var i = 1; i <= 9; i++) {
        clearBoard(i);
    }

    document.winner = null;
    setMessage("Player " + currentTurn + ", please start the game.");
}

function setMessage(message) {
    document.getElementById("message").innerText = message;
}

function nextMove(square) {
    if (document.winner != null) {
        setMessage(currentTurn + " has already won.");
    } else if (square.innerText == '') {
        square.innerText = currentTurn;
        swapTurn();
    } else {
        setMessage("No cheating, choose another square.");
    }
}

function swapTurn() {
    if (checkForWinner(currentTurn)) {
        setMessage(currentTurn + " has won!");
        document.winner = currentTurn;
    } else if (checkForDraw(currentTurn)) {
        setMessage("Its a draw!");
    } else if (currentTurn == player1) {
        currentTurn = player2;
        setMessage("Player " + currentTurn + ", it's your turn.");
        player2Move();
    } else {
        currentTurn = player1;
        setMessage("Player " + currentTurn + ", it's your turn.");
    }
}

function checkForWinner(move) {
    var result = false;
    if (checkRow(1, 2, 3, move) ||
        checkRow(4, 5, 6, move) ||
        checkRow(7, 8, 9, move) ||
        checkRow(1, 4, 7, move) ||
        checkRow(2, 5, 8, move) ||
        checkRow(3, 6, 9, move) ||
        checkRow(1, 5, 9, move) ||
        checkRow(3, 5, 7, move)) {
        result = true;
    }
    return result;
}

function checkForDraw(move) {
    var draw = false;
    if (((getBox(1) == "X") || (getBox(1) == "O")) &&
        ((getBox(2) == "X") || (getBox(2) == "O")) &&
        ((getBox(3) == "X") || (getBox(3) == "O")) &&
        ((getBox(4) == "X") || (getBox(4) == "O")) &&
        ((getBox(5) == "X") || (getBox(5) == "O")) &&
        ((getBox(6) == "X") || (getBox(6) == "O")) &&
        ((getBox(7) == "X") || (getBox(7) == "O")) &&
        ((getBox(8) == "X") || (getBox(8) == "O")) &&
        ((getBox(9) == "X") || (getBox(9) == "O"))) {
        draw = true;
    }
    return draw;
}

function checkRow(a, b, c, move) {
    var result = false;
    if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
        result = true;
    }
    return result;
}

function getBox(number) {
    return document.getElementById("s" + number).innerText;
}

function clearBoard(number) {
    document.getElementById("s" + number).innerText = "";
}

function player2Move() {

    var blanks = [];
    for (var i = 1; i <= 9; i++) {
        var place = document.getElementById("s" + i).innerText
        if (place == "") blanks.push([i]);
    }
    if (blanks.length > 0) {
        var r = Math.floor((Math.random() * blanks.length));
        nextMove(document.getElementById("s" + blanks[r]));
    }
}
