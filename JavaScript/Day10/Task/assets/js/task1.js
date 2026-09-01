// var
var a = 10;
var a = 20;       // Redeclaration allowed
a = 30;           // Reassignment allowed

console.log(a);


// let
let b = 10;
// let b = 20;    // Error: Redeclaration not allowed
b = 30;           // Reassignment allowed

console.log(b);


// const
const c = 10;
// const c = 20;  // Error: Redeclaration not allowed
// c = 30;       // Error: Reassignment not allowed

console.log(c);


// Scope
{
    var x = 100;
    let y = 200;
    const z = 300;
}

console.log(x);   // 100
// console.log(y); // Error
// console.log(z); // Error


// Hoisting
console.log(p);   // undefined
var p = 50;

// console.log(q); // ReferenceError - TDZ
let q = 60;

// console.log(r); // ReferenceError - TDZ
const r = 70;