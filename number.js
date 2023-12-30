const n = new Number(90.89)


// console.log(n.toPrecision(3)); for rounding of

const num = new Number(10000000)

// console.log(num.toLocaleString('en-IN'));    for commas

//==================Maths===========================

console.log(Math.abs(-4));
console.log(Math.round(5.6));
console.log(Math.floor(5.6));
console.log(Math.ceil(5.6));

console.log(Math.max(5,6,23,54,67));
console.log(Math.min(5,6,23,54,67));
console.log(Math.random()); //give val between 0 & 1
//add 1 for discard 0 
//to get value of our desired range we does following
let min = 10, max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min);

