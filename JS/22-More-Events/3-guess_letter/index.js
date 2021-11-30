/**************************************************************************\
* Psuedo code:                                                             *
* 1. generate random letter and store in a global variable                 *
* 2. Listen to keyboard event       <--------------------------------\     *
* 3. if the key is a letter, store the letter, else change           |     *
*    message to "Invalid char"                                       |     *
* 4. Check if the letter is the hidden letter             -----------+----\*
* 5. if the key was not guessed yet store in guessed array           |    |*
*    and change the message "You guessed wrong".                     |    |*
*    else change the message to "You already guessed the letter"     |    |*
* 6. Update the wrong guesses section according to the array --------/    |*
* 7. if 4 is true change the message to "Congrats" and dye it green color</*
* 8. Reveal the hidden letter in the .letter div                           *
* 9. Create a button to reset the game                                     *
\**************************************************************************/
function generateRandomLetter() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
}

function validateChar(char) {
    return /[a-z]/.test(char) ? true : false;
}

function startGame() {
    const randomLetter = generateRandomLetter();
    const letterEl = document.querySelector(".letter");
    const guessed = [];
    const guessedEl = document.querySelector(".wrong-guesses");
    letterEl.value = "?";
    const messageEl = document.querySelector(".message");

    // listen to keystrokes
    window.addEventListener("keypress", keyPress);

    /**********************************************************\
    * Reset:                                                   *
    * 1. go through everything and set it to the initial value *
    * 2. referesh the page                                     *
    \**********************************************************/
    function resetGame() {
        document.querySelectorAll("*").forEach((el) => (el.style = ""));
        guessed.forEach((_) => {
            guessed.pop();
        });
        guessedEl.textContent = "";
        messageEl.textContent = "";
        letterEl.textContent = "?";
        document.querySelector("button").remove();
        startGame();
    }

    function gameWon(letter) {
        letterEl.textContent = letter;
        messageEl.style.color = "green";
        messageEl.style.borderColor = "green";
        messageEl.textContent = "Congrats, you won!!";
        window.removeEventListener("keypress", keyPress);
        const resetBtn = document.createElement("button");
        resetBtn.textContent = "Reset Button";
        resetBtn.addEventListener("click", resetGame);
        document.body.append(resetBtn);
    }

    function keyPress(e) {
        const char = e.key.toLowerCase();

        if (!validateChar(char)) {
            messageEl.textContent =
                "Invalid character, enter a letter from the alphabet";
            return;
        } else if (char === randomLetter) {
            gameWon(randomLetter);
        } else if (guessed.includes(char)) {
            messageEl.textContent = `${char} was aleady guessed`;
        } else {
            messageEl.textContent = "You guessed wrong";
            guessed.push(char);
        }
        messageEl.style.display = "block";
        guessedEl.textContent = guessed.join(", ");
    }
}
