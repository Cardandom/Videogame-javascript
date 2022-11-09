const canvas = document.querySelector ('#game');
const game = canvas.getContext('2d');

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);

let canvasSize;
let elementsSize;

function startGame () {

    game.font = (elementsSize -5 ) + 'px Verdana';
    game.textAlign = 'end';

    for (let i = 1; i <= 10; i++) {
        game.fillText(emojis['X'], (elementsSize) + 7, elementsSize * i -10);    
    }
    
}

function setCanvasSize () {

    if (window.innerHeight > window.innerWidth) {
        canvasSize = window.innerWidth * 0.8;
    } else {
        canvasSize = window.innerHeight * 0.8;
    }

    /*game.fillRect(0,0,100,100);
    game.clearRect(0,0,50,50);*/

    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);

    elementsSize = canvasSize / 10;

    startGame ();
}