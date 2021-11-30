const p1 = document.querySelector("#player1-race");
const p2 = document.querySelector("#player2-race");
const resetBtn = document.querySelector("button");
let gameEnd = false;

window.addEventListener("keyup", playerStep);
resetBtn.addEventListener("click", () => {
    window.addEventListener("keyup", playerStep);
    resetBtn.style.display = "none";
    document
        .querySelectorAll(".active")
        .forEach((el) => el.classList.remove("active"));
    p1.firstElementChild.classList.add("active");
    p2.firstElementChild.classList.add("active");
});

function playerStep(e) {
    let currPos;
    let moving;
    if (e.key === "ArrowRight") {
        currPos = p1.querySelector(".active");
        moving = "player1";
    } else if (e.key === "d") {
        currPos = p2.querySelector(".active");
        moving = "player2";
    }
    currPos.classList.remove("active");
    currPos.nextElementSibling.classList.add("active");
    if (currPos.nextElementSibling.classList.contains("finish")) {
        gameEnd = true;
        alert(`${moving} has won`);
        window.removeEventListener("keyup", playerStep);
        resetBtn.style.display = "block";
    }
}
