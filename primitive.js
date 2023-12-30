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
