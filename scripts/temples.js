// const body = document.getElementById("html");
// body.style.overflowY = 'hidden';



document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".mobile-menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");
    const body = document.getElementById("html");
    let clickCounter = 2;
    toggle.addEventListener("click", function () {
        mobileMenu.classList.toggle("active");
        clickCounter = clickCounter + 1;
        let evenCheck = clickCounter%2;
        if (evenCheck !== 0) {
        body.style.overflowY = "hidden";
        } else {
            body.style.overflowY = "visible";
        };
    });

    const footer = document.querySelector("#lastModified");
    const span = document.querySelector("#currentYear")
    let date = document.lastModified;
    const currentDate = new Date(date);
    footer.textContent = currentDate;
    let currentYear = currentDate.getFullYear();
    span.textContent = currentYear;

});