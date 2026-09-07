const heading=document.getElementById("heading");
const button=document.getElementById("btn");

button.addEventListener("click", ()=>{
    heading.textContent="Hello World";
    heading.style.color="blue";
    heading.classList.add("newStyle");
})