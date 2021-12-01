const DIRECTIONS = {
    ArrowUp: { x: 0, y: -1 },
    ArrowDown: { x: 0, y: 1 },
    ArrowRight: { x: 1, y: 0 },
    ArrowLeft: { x: -1, y: 0 },
};
let inputDirection = DIRECTIONS["ArrowRight"];

window.addEventListener("keydown", (e) => {
    inputDirection = DIRECTIONS[e.key];
});

export function getInputDirection() {
    return inputDirection;
}
