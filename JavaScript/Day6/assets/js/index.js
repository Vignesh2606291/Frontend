// //task 1

let result =" ";

for(let a=0;a<=20;a++){
    result=result+a+" ";
}

console.log( "Print Numbers:", result);

// task 2

let result1=0;
for(let a=0;a<=50;a++){
if(a%2===0){
    result1=result1+a+" ";
}
}
console.log("Even numbers: ", result1);

// task 3

let result2=0;
for(let a=0;a<=50;a++){
if(a%2===1){
    result2=result2+a+" ";
}
}
console.log( "odd numbers:", result2);

// task 4 

let sum=0;

for(let a=0;a<=20;a++){
sum=sum+a;
}
console.log("sum of 20 is:",sum);

// Task 5   Even Sum

let result3=0;

for(let a=0;a<=50;a++){
if(a%2===0){
    result3=result3+a;
}
}
console.log("Even numbers: ", result3);

// Task 6   Count

let result4=0;

for(let a=0;a<=100;a++){
if(a%2===0){
    result3=result4+a;
    result4++
}
}
console.log("Even numbers: ", result4);


// Task  7    Find a Number


for(let a =0;a<=100;a++){
    if(a===73){
        console.log("Find a Number:", a);
        break;
    }
}

// task 8  Reverse Number

let result5=" ";

for(let a=5;a>0;a--){
   
    result5=result5+a;
}
 console.log( "Reverse Number is:" ,result5);

 // Task 9 Reverse String

 let text = "javascript";
let name=" ";
 for(let a=text.length-1;a>=0;a--){
    name=name+text[a];
    
 }
 console.log( " Reverse String:", name);


 // Task 10 — Find Character

 let text1 = "javascript";
let target = "s";
for(let a=0;a<text1.length;a++){
    if(text[a] === target){
        console.log( "Find Character:" ,target);
        break;
        
    }
}