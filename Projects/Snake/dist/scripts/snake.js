export const SNAKE_SPEED = 5;

const snakeBody = [{ x: 11, y: 11 }];

export function update() {}

export function draw(gameBoard) {
    snakeBody.forEach((segment) => {
        const snakeEl = document.createElement("div");
        snakeEl.style.gridColumnStart = segment.x;
        snakeEl.style.gridRowStart = segment.y;
        snakeEl.classList.add("snake");
        gameBoard.appendChild(snakeEl);
    });
}
