let cities = ["Chennai", "Mumbai", "Delhi", "Bangalore", "Kolkata"];

console.log("Original array:", cities);

let removedCity = cities.shift();

cities.unshift("Hyderabad");

console.log("Removed city:", removedCity);
console.log("Final array:", cities);