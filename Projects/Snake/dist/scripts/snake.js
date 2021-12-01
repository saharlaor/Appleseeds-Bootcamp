import { getInputDirection } from "./input.js";

export const SNAKE_SPEED = 5;

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

export function onSnake(position, ignoreHead = false) {
    return snakeBody.some((segment, i) => {
        if (ignoreHead && i === 0) return false;
        return segment.x === position.x && segment.y === position.y;
    });
}

function checkOutOfBounds() {
    return (
        snakeBody[0].x < 1 ||
        snakeBody[0].x > 21 ||
        snakeBody[0].y < 1 ||
        snakeBody[0].y > 21
    );
}

function checkOverlap() {
    return onSnake(snakeBody[0], true);
}

export function checkDeath() {
    return checkOutOfBounds() || checkOverlap() ? snakeBody.length : false;
}
