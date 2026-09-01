//array destructureing

const numbers = [10, 20, 30];

const [first, second, third] = numbers;

console.log(first);
console.log(second);
console.log(third);

//object destructureing

const student = {
    name: "Ravi",
    age: 25,
    course: "JavaScript"
};

const { name, age, course } = student;

console.log(name);
console.log(age);
console.log(course);