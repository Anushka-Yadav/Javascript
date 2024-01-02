const user ={
    name:"anushka",
    price:890,
    welcomeMessage:function(){
        console.log(`hello ${this.name}`);
        console.log(this);//display the current values in variable
    }
}

console.log(user.welcomeMessage()); //old user name
user.name="manav";
console.log(user.welcomeMessage()); //changed user name
console.log(this);  //empty current context


// this is basically used in object and not in functions examples
function out(){
    function out(){
        console.log("anumanu");
        let name="anushka";
        console.log(this.name);// not work
        console.log(this);
    }
}
out()

const anu = () => {   // arrow function
    
        console.log("anumanu");
        let name="anushka";
        console.log(this.name);// not work  "undefined"
        console.log(this); /// empty 
    
}
const manu = (num1,num2) => {   // arrow function
    
   return num1+num2

}
console.log(manu(1,2));
const mmanu = (num1,num2) =>    (num1+num2)//no curly braces then no return keyword and directly use parentheses
 
 
 console.log(mmanu(11,2));
 mmanu()
const aanu = (num1,num2) =>    ({name:"anushka"}) //when declaring object we have to use both braces
 console.log(aanu(11,2));
 aanu()

 /*
 ways to declare fucntion

 **const v = function(){

 }
 **const v=()=>{

 }
 **const v = () => ()

 */