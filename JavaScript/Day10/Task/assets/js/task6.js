class Student {

    constructor(name, age, mark) {
        this.name = name;
        this.age = age;
        this.mark = mark;
    }

    displayDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Mark: ${this.mark}`);
    }
}

const student1 = new Student("Ravi", 20, 85);
const student2 = new Student("Akash", 21, 90);

student1.displayDetails();

console.log("----------------");

student2.displayDetails();