let employees = [];

let form = document.getElementById("employeeForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("employeeName").value;

    let department = document.getElementById("department").value;

    let salary = document.getElementById("salary").value;

    let employee = {
        name: name,
        department: department,
        salary: salary
    };

    employees.push(employee);

    let table = document.getElementById("employeeTable");

    table.innerHTML = "";

    employees.forEach(function(emp) {

        let row = document.createElement("tr");

        row.innerHTML = `
            <td>${emp.name}</td>
            <td>${emp.department}</td>
            <td>${emp.salary}</td>
        `;

        table.appendChild(row);

    });

    form.reset();

});