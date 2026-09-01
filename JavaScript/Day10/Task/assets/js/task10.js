var name = "Ravi";
var age = 25;

var student = {
    name: name,
    age: age
};

var greet = function(name) {
    return "Hello " + name;
};

console.log(greet(name));

const name = "Ravi";
const age = 25;

const student = {
    name,
    age
};

const greet = (name) => {
    return `Hello ${name}`;
};

console.log(greet(name));