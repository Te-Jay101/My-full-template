// Winning combinations (cell places) //
const player_o_class = 'circle';
const player_x_class = 'x';
const winning_comb = [
    [2, 4, 6]
    [0, 1, 2]
    [3, 4, 5]
    [6, 7, 8]
    [1, 4, 7]
    [0, 3, 6]
    [2, 5, 8]
    [0, 4, 8]
]


const cellElements = document.querySelectorAll('[data-cell]')
const playzoneElement = document.getElementById('play-zone')
const winningMesssageElement = document.getElementById('winningMessage')
const restartButton = document.getElementById('restartButton')
const winningMessageTextElement = document.getElementById('winningMessageText')
let isPlayer_o_Turn = false