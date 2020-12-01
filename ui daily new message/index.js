const checkBoxs = document.querySelectorAll(".conversation i");

const selected = ["fas", "fa-check-circle", "selected"];
const defaulted = ["far", "fa-circle"];

checkBoxs.forEach((checkBox) => {
    checkBox.addEventListener("click", (e) => {
        if (e.target.classList[1] == defaulted[1]) {
            e.target.classList.remove(...defaulted);
            e.target.classList.add(...selected);
        } else {
            e.target.classList.remove(...selected);
            e.target.classList.add(...defaulted);
        }
    });
});
