const DIRECTIONS = {
    ArrowUp: { x: 0, y: -1 },
    ArrowDown: { x: 0, y: 1 },
    ArrowRight: { x: 1, y: 0 },
    ArrowLeft: { x: -1, y: 0 },
};
let inputDirection = DIRECTIONS["ArrowRight"];

export function changeDirection(e) {
    const tempDirection = DIRECTIONS[e.key];

    // If the arrow changes the direction to the other make change
    Math.abs(inputDirection.x) - Math.abs(tempDirection.x) &&
        (inputDirection = DIRECTIONS[e.key]);

    window.removeEventListener("keydown", changeDirection);
}

export function getInputDirection() {
    return inputDirection;
}
