one = document.getElementById("one");
one.textContent = "This is a DOM";

two = document.querySelectorAll(".two");


two.forEach( (two, index)=>{
    two.textContent = "This is paragraph " + (index + 1);
     });