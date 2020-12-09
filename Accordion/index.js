const buttons = document.querySelectorAll(".accordion__item");

buttons.forEach((button, idx) => {
    button.addEventListener("click", (e) => {
        const item = document.querySelectorAll(".accordion__item");
        // console.log(item[idx].children[0].classList);
        const btnStatus = button.classList;
        if (btnStatus.contains("opened")) {
            button.classList.remove("opened");
            item[idx].children[0].classList.replace(
                "fa-plus-circle",
                "fa-minus-circle"
            );
        } else {
            button.classList.add("opened");
            item[idx].children[0].classList.replace(
                "fa-minus-circle",
                "fa-plus-circle"
            );
        }

        if (item[idx].children[1].children[1].style.display != "block") {
            item[idx].children[1].children[1].style.display = "block";
        } else {
            item[idx].children[1].children[1].style.display = "none";
        }
    });
});
console.dir(buttons);
