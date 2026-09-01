function studentDetails(name, course, city = "Chennai") {
    return `My name is ${name}. I am studying ${course} in ${city}.`;
}

console.log(studentDetails("Ravi", "JavaScript"));
console.log(studentDetails("Akash", "Java", "Bangalore"));