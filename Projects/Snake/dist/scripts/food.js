import { getSnakeHead } from "./snake.js";

const food = { x: 1, y: 1 };

export function update() {
    if (JSON.stringify(getSnakeHead()) === JSON.stringify(food)) {
        randomizeLocation();
        return true;
    }
    return false;
}

export function draw(gameBoard) {
    const foodEl = document.createElement("div");
    foodEl.style.gridColumnStart = food.x;
    foodEl.style.gridRowStart = food.y;
    foodEl.classList.add("food");
    gameBoard.appendChild(foodEl);
}

function randomizeLocation() {
    food.x = Math.ceil(Math.random() * 21);
    food.y = Math.ceil(Math.random() * 21);
}
