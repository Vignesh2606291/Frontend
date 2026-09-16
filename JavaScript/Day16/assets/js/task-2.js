const box = document.getElementById("box");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    box.classList.remove("active");
});