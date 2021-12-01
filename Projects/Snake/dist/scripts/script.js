import {
    update as updateSnake,
    draw as drawSnake,
    SNAKE_SPEED,
} from "./snake.js";

let lastRenderTime = 0;
const gameBoard = document.querySelector("#game-board");

function main(currentTime) {
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
    lastRenderTime = currentTime;

    update();
    draw();
}

function update() {
    updateSnake();
}

function draw() {
    gameBoard.innerHTML = "";
    drawSnake(gameBoard);
}

window.requestAnimationFrame(main);
