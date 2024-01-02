
addone(); // it works as it is global function
function addone(){
    console.log(2+2);
}

//addtwo()     **did not work as it isstored in a variable
const addtwo=function add(){
    console.log(3+3);
}
addtwo() 
