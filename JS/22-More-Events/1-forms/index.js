const formEl = document.querySelector("form");
const submitBtn = formEl.querySelector("button");
const confirmWindow = document.querySelector(".confirmation-window");
const [confirmBtn, changeInfoBtn] = confirmWindow.querySelectorAll("button");

confirmWindow.style.display = "none";

submitBtn.addEventListener("click", (e) => {
    const confirmMessage = [...formEl.querySelectorAll("input")].reduce(
        (res, input) => res + `<br>${input.name}: ${input.value}`,
        "Are these the correct details?<br>"
    );
    confirmWindow.querySelector(".confirm-text").innerHTML = confirmMessage;
    confirmWindow.style.display = "block";
});

changeInfoBtn.addEventListener(
    "click",
    (e) => (confirmWindow.style.display = "none")
);

confirmBtn.addEventListener(
    "click",
    (e) =>
        (confirmWindow.innerHTML =
            "congratulations you successfully sent this form")
);
