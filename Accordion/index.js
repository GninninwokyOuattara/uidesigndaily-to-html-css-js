const buttons = document.querySelectorAll(".accordion__item");

buttons.forEach((button, idx) => {
    button.addEventListener("click", (e) => {
        const item = document.querySelectorAll(".accordion__item");
        const btnStatus = button.classList;
        if (btnStatus.contains("opened")) {
            button.classList.remove("opened");
            item[idx].children[0].classList.replace(
                "fa-plus-circle",
                "fa-minus-circle"
            );
            item[idx].children[1].children[1].style.maxHeight = "0px";
        } else {
            button.classList.add("opened");
            item[idx].children[0].classList.replace(
                "fa-minus-circle",
                "fa-plus-circle"
            );
            item[idx].children[1].children[1].style.maxHeight = "500px";
        }

        // if (item[idx].children[1].children[1].style.display != "block") {
        //     item[idx].children[1].children[1].style.display = "block";
        //     item[idx].children[1].children[1].style.maxHeight = "500px";
        // } else {
        //     // item[idx].children[1].children[1].style.display = "none";
        //     item[idx].children[1].children[1].style.maxHeight = "0px";
        // }
    });
});
