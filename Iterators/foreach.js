
// //for syntax

for (let i = 1; i <=10; i++) {
    console.log(` table of ${i} `);
    for(let j=1;j<=10;j++)
    {
        console.log(`${i} * ${j} = ${i*j}`);
    }
    
}
let array=[1,2,3,4]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
    
}
for (let index = 1; index < 8; index++) {
    if(index==5){
    console.log("detected 5");    ///full break the loop
    break;
    }
    console.log(index);   
}

//break and continue

for (let index = 1; index < 8; index++) {
    if(index==5){
    console.log("detected 5");    ///skip one statement the loop
    continue;
    }
    console.log(index);   
} 
