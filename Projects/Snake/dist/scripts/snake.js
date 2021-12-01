import { getInputDirection } from "./input.js";

export const SNAKE_SPEED = 15;

const snakeBody = [{ x: 11, y: 11 }];

export function update(grow) {
    const direction = getInputDirection();
    snakeBody.unshift({ ...snakeBody[0] });
    snakeBody[0].x = snakeBody[0].x + direction.x;
    snakeBody[0].y = snakeBody[0].y + direction.y;
    if (!grow) snakeBody.pop();
}

export function draw(gameBoard) {
    snakeBody.forEach((segment) => {
        const snakeEl = document.createElement("div");
        snakeEl.style.gridColumnStart = segment.x;
        snakeEl.style.gridRowStart = segment.y;
        snakeEl.classList.add("snake");
        gameBoard.appendChild(snakeEl);
    });
}

export function getSnakeHead() {
    return snakeBody[0];
}
