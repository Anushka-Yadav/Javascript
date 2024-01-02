let email="0"  // string has value then it is truthy value
if(email){
    console.log("mail");
}
else{
    console.log("dont have email");
}
//falsy value
/*
false
0
-0
0nnull
undefined
NaN
""
*/
//truthy value
/*
"value"
"0" 
'false'
" "
[]
{}
function(){}
*/

//check empty 0bject
let obj={}
if(Object.keys(obj).length===0){
    console.log("emty obj");
}

// nullish coalescing operator(??)
// let val1 = 3 ?? 7
// let val2=null ?? 7
let val1=undefined ?? 7
let val2=null ?? 7??8
console.log(val2);
console.log(val1);

// terniary operator cond?true:false

let a= "hello"

a=="hello" ? console.log("its hello") : console.log("its something else");
