const menuToggle = document.getElementsByClassName("menu-toggle")[0];
const navList = document.querySelector("nav ul");


menuToggle.addEventListener("click", function () {
    navList.classList.toggle("slide");
});