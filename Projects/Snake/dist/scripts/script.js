import {
    update as updateSnake,
    draw as drawSnake,
    checkDeath,
} from "./snake.js";
import { update as updateFood, draw as drawFood } from "./food.js";
import { changeDirection, getDifficulty, setDifficulty } from "./input.js";

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

    let difficulty = getDifficulty();
    if (!difficulty.speed) {
        return;
    }

    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / difficulty.speed) return;
    lastRenderTime = currentTime;

    window.addEventListener("keydown", changeDirection);
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

document
    .querySelector(".difficulty__submit")
    .addEventListener("click", setDifficulty);
window.requestAnimationFrame(main);
