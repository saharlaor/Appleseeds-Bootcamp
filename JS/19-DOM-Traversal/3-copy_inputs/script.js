let inputs = Array.from(document.querySelectorAll("input"));
let submit = document.querySelector("#submit");

inputs.forEach((input, i) => {
    input.addEventListener("input", (e) => {
        if (inputs[i] !== submit) {
            if (/\d/.test(input.value.slice(-1))) {
                input.value = input.value.slice(-1);
                inputs[i + 1].focus();
            } else if (input.value.length === 1) {
                input.value = null;
            } else {
                input.value = input.value[0];
            }
        }
        if (isInputsFull()) {
            submit.click();
        } else if (i === inputs.length - 2) {
            inputs[0].focus();
        }
    });

    input.addEventListener("paste", (e) => {
        e.clipboardData
            .getData("text")
            .split("")
            .filter((char) => /\d/.test(char))
            .slice(0, inputs.length - i)
            .forEach((char, j) => {
                inputs[i + j].value = char;
                console.log(inputs[i + j].innerHTML);
                if (i + j === inputs.length - 1) {
                    inputs[0].focus();
                }
            });
        e.preventDefault();
    });
});

function isInputsFull() {
    return inputs.every((input) => (input.value ? true : false));
}
