const fruits = ["Apple","Mango","Orange"];

const veg = ["Carrot","Potato"];

fruits.push("Banana")
console.log(fruits);

fruits.pop()
console.log(fruits);

fruits.unshift("Grapes");
console.log(fruits);

fruits.shift()
console.log(fruits);

console.log("Length:",  fruits.length);

const result = fruits.concat(veg)
console.log(result);


// spread operator

console.log([...fruits,...veg]);