const card = document.getElementById("card");
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
    card.classList.toggle("dark");
});