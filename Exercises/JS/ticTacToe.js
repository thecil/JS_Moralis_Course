// tic tac toe prompt - console two player game
const getBoardString = (gameBoard) => {
    let boardString = '';
    for(let i = 0; i < gameBoard.length; i += 1 ){
        boardString += `${gameBoard[i] ?? i+1}`;
        if(i % 3 === 2) {
            boardString += '\n';
        }
    }
    return boardString;
}

const getUserInput = (nextPlayerSymbol, gameBoard) => {
    return +prompt(`
    Board: \n${getBoardString(gameBoard)} 
    Enter ${nextPlayerSymbol}'s next move (1-9):
    `);
}

const isMoveValid = (move, gameBoard) => {
    const boardIndex = move - 1;
    // move is a number
    // move is between 1 and 9 (inclusive)
    // gameBoard does not contain a symbol at the place of the move
    return (
        typeof move === 'number' 
        && (move >= 1 && move <= 9)
        && gameBoard[boardIndex] === null
    );
}

const makeAMove = (gameBoard, nextPlayerSymbol) => {
    const newGameBoard = [...gameBoard];
    let move = null;
    // clone the game board before placing moves in it
    do{
        move = getUserInput(nextPlayerSymbol, gameBoard);
    }while(!isMoveValid(move, gameBoard));
    const boardIndex = move -1;
    newGameBoard[boardIndex] = nextPlayerSymbol;
    return newGameBoard;
}

const hasLastMoveWon= (lastMove, gameBoard) => {
    let winnerCombos = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    for(let [i1, i2, i3] of winnerCombos){
        if(
            gameBoard[i1] === lastMove &&
            gameBoard[i1] === gameBoard[i2] &&
            gameBoard[i1] === gameBoard[i3]
        ) {
            return true;
        }
    }
    return false;
}
const isGameOver = (gameBoard, currentPlayerSymbol) => {
    // 1. check if there is a winner 
    if( hasLastMoveWon(currentPlayerSymbol, gameBoard) ) {
        alert(`Congrulations, ${currentPlayerSymbol} has won the game`);
        return true;
    }
    // 2. check if the board is full
    if(gameBoard.every(element => element !== null)){
        alert("Draw. Game Over");
        return true;
    }
    // return: winner/draw OR game is still in progress
    return false;
}

const ticTacToe = () => {
    let gameBoard = new Array(9).fill(null);
    let currentPlayerSymbol = null;
    do{
        currentPlayerSymbol = currentPlayerSymbol === 'X' ? 'O' : 'X';
        gameBoard = makeAMove(gameBoard, currentPlayerSymbol);
    }while( !isGameOver(gameBoard, currentPlayerSymbol) );
}  

ticTacToe();