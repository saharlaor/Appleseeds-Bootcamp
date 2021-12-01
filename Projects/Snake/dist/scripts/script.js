import {
    update as updateSnake,
    draw as drawSnake,
    checkDeath,
    SNAKE_SPEED,
} from "./snake.js";
import { update as updateFood, draw as drawFood } from "./food.js";

let lastRenderTime = 0;
const gameBoard = document.querySelector("#game-board");
let grow = false;

function main(currentTime) {
    const deathStatus = checkDeath();
    if (deathStatus) {
        if (confirm(`You lost after eating ${deathStatus - 1}\nPlay Again?`)) {
            window.location.reload();
        }
        return;
    }

    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
    lastRenderTime = currentTime;

    grow = update(grow);
    draw();
}

function update(grow) {
    updateSnake(grow);
    return updateFood();
}

function draw() {
    gameBoard.innerHTML = "";
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

window.requestAnimationFrame(main);
