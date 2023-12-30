function show(...num){  //rest op
    return num;

}
// console.log(show(100,200,234));

const obj={
    name:"anu",
    age:23
}
function handleobj(anyobj){
        console.log(`hello ${anyobj.name}`);
}
console.log(handleobj(obj)); //initialized obj pass
console.log(handleobj({
    name:"manav",
}));//original obj pass
