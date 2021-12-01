const food = { x: 1, y: 1 };

export function update() {
    // const direction = getInputDirection();
    // snakeBody.unshift({ ...snakeBody[0] });
    // snakeBody[0].x = snakeBody[0].x + direction.x;
    // snakeBody[0].y = snakeBody[0].y + direction.y;
    // snakeBody.pop();
}

export function draw(gameBoard) {
    const foodEl = document.createElement("div");
    foodEl.style.gridColumnStart = food.x;
    foodEl.style.gridRowStart = food.y;
    foodEl.classList.add("food");
    gameBoard.appendChild(foodEl);
}
