/* ================================================7 Types  primitive===============================================
string
number
boolean
null
undefined
symbol
BigInt

===================================================non primitive(reference)===================================================

arrays
object
functions

*/ 
let id = Symbol('ghg');
let newid = Symbol('ghg'); //symbol used for uniqueness
console.log(id==newid); //false

const bigitr=56477777777777777778n
console.log(bigitr);

let arr = [123,900,"rat","bear"];
let myobj={
    name:"anushka",
    sec:'A',
    rolllno:24
}
const myfun = function(){
    console.log(
        "hello"+"World"
    );
}
myfun();


//================================== memories=========================================================

/*
stack(in primitive data types)
heap(nonprimitive data types)
*/

//stack vision

let str1="anushka"
let str2=str1
console.log(str1,str2);
str2="anu"
console.log(str1,str2); //copy is provided not the original str1

let user1={
    name:"anushka",
    rollno:24
}
let user2=user1;
console.log(user1.name,user2.name); //original reference is provided
user2.name="manav"
console.log(user1.name,user2.name);


