/*------ Constants --------*/

const players = {
    '0': 'white',
    '1': 'x',
    '-1': 'o'
};

/*------ State (variables) -------*/

let board; // array of arrays; each cell(div) holds value of 0, 1, or -1
let turn; // players['1'] -or- players['-1']
let winner; // null => gameplay in progress; 1/-1 => winning player; 'T' => tie

/*------ Cached element references ------*/

const btn = document.querySelector('button');
const message = document.querySelector('h3');
const playSect = [...document.querySelectorAll('#board > div')];

console.log(playSect)
/*------ Event Listeners ------*/

btn.addEventListener("click", init);
playSect.forEach(div => {
    div.addEventListener("click", moveHandler);
    
});
/*------ Functions ------*/ 
init();
function init() {
    board = [
        [0, 0, 0,
        0, 0, 0,
        0, 0, 0]
    ];
    turn = 1;
    winner = null;
    render();
}

function moveHandler(e) {
    const index = playSect.indexOf(e.target);
    board[index] = turn;
    turn *= -1;
    console.log(board)
    // winner = getWinner(idx);
    render();
}

function render() {
    btn.style.visibility = winner ? 'visible' : 'hidden';
    renderBoard();
    // renderMessage();

}

function renderBoard() {
    board.forEach(cell => {
        const cellId = `c${board.indexOf(cell)}`;
        const div = document.querySelector(`#${cellId}`)
    })
}

// getWinner(idx) {

// }

// TODO: restructure html to create 3 separate array-arrays && reassign id's 