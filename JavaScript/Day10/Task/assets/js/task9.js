const numbers = [10, 25, 30, 45, 50, 65];

const greaterThan30 = numbers.filter(number => number > 30);

console.log(greaterThan30);

const firstGreaterThan40 = numbers.find(number => number > 40);

console.log(firstGreaterThan40);

const exists = numbers.includes(50);

console.log(exists);

const doubled = numbers.map(number => number * 2);

console.log(doubled);