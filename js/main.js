const players = {
    1: 'blue',
    '-1': 'red',
    'null': 'white' 
}

const winConditions = [
    [0, 1, 2], [3, 4 ,5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

let board, turn, winner;

const squares = document.querySelectorAll('#board > div');
const message = document.querySelector('h3');

document.querySelector('#board').addEventListener("click", handleMove);
document.querySelector('button').addEventListener("click", init);

init();



function handleMove(e) {
    const index = parseInt(e.target.id.replace('sq', ''));
    if (board[index] || winner) return;
    board[index] = turn;
    turn *= -1;
    winner = getWinner();
    render();
}

function getWinner() {
    for (let i = 0; i < winConditions.length; i++) {
        let cond = winConditions[i]
        if (Math.abs(board[cond[0]] + board[cond[1]] + board[cond[2]]) === 3) return board[cond[0]];
    }
    if (board.includes(null)) return null;
    return "T";
}

function render() {
    board.forEach((sq, idx) => {
        squares[idx].style.background = players[sq];
    });
    if (winner === "T") {
        message.innerHTML = "Tie Game!";
    } else if (winner) {
        message.innerHTML = `<span style="color: ${players[winner]}">${players[winner].toUpperCase()}</span> Wins!`;
    } else {
        message.innerHTML = `<span style="color: ${players[turn]}">${players[turn].toUpperCase()}'s</span> Turn`;
    }
}

function init() {
    board = [null, null, null,
             null, null, null, 
             null, null, null       
    ];
    turn = 1;
    winner = null;
    render();
}