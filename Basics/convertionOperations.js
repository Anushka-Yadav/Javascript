let n="33"

let i=Number(n)
console.log(i);
console.log(typeof(i)); //convert to number 

n="33a"
i=Number(n)
console.log(i);   // conerted but value is NaN    " not a number "
console.log(typeof(i));

let h=33
let j=String(h) //these are classes
console.log(j);   // conerted to string  "33"    
console.log(typeof(j));


h=6 //true

h="" //false
h="hello" //true
h=0 //false
j=Boolean(h) //these are classes
console.log(j);   // conerted to Boolean is "33"    
console.log(typeof(j));



//======================================================= operators=================================================================================

console.log("2"+1);  //21
console.log("1"+2);//12
console.log(1+2+"4");//34

console.log("2">1)//true
console.log("2"==1)//false
console.log(null>=0);//true as null converted to 0

console.log(2===2); // true strict comparison in (===)
console.log("2"===2) //false cuz of data type



