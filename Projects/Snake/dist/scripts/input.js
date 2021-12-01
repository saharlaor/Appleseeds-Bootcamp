import { difficulty } from "./snake.js";

const DIRECTIONS = {
    ArrowUp: { x: 0, y: -1 },
    ArrowDown: { x: 0, y: 1 },
    ArrowRight: { x: 1, y: 0 },
    ArrowLeft: { x: -1, y: 0 },
};
const DIFFICULTY = {
    Easy: { speed: 5, growth: 1 },
    Medium: { speed: 10, growth: 1 },
    Hard: { speed: 10, growth: 3 },
    Hell: { speed: 15, growth: 3 },
};

let inputDirection = { x: 0, y: 0 };
let inputDifficulty = { speed: 0, growth: 0 };

export function changeDirection(e) {
    const tempDirection = DIRECTIONS[e.key];

    // If the arrow changes the direction to the other axis make change
    if (
        Math.abs(inputDirection.x) - Math.abs(tempDirection.x) ||
        Math.abs(inputDirection.y) - Math.abs(tempDirection.y)
    ) {
        inputDirection = DIRECTIONS[e.key];
    }

    window.removeEventListener("keydown", changeDirection);
}

export function setDifficulty(e) {
    inputDifficulty =
        DIFFICULTY[
            document.querySelector("input[name=difficulty]:checked").value
        ];
    e.target.removeEventListener("click", setDifficulty);
    document.querySelector("#difficulty-form").style.display = "none";
}

export function getInputDirection() {
    return inputDirection;
}

export function getDifficulty() {
    return inputDifficulty;
}
