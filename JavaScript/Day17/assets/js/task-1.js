
let students = [];

let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function() {

    // Get input values
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let city = document.getElementById("city").value;

    
    let student = {
        name: name,
        age: age,
        city: city
    };

    
    students.push(student);

    // Get output div
    let output = document.getElementById("output");

    output.innerHTML = "";

    
    students.forEach(function(student) {

        let div = document.createElement("div");

        div.className = "student";

        div.innerHTML = `
            <p>Name: ${student.name}</p>
            <p>Age: ${student.age}</p>
            <p>City: ${student.city}</p>
        `;

        output.appendChild(div);

    });

    // Clear input fields
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("city").value = "";

});