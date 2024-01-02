const name=new String("anushkayadav");
const n=new String("manavkhadka");
console.log(n);
console.log(name);



console.log(n.length);
console.log(n.toUpperCase());
console.log(n.toLowerCase());
console.log(n.split("n"));

console.log(n.charAt(3));
console.log(n.indexOf('a'));
let newstr=n.substring(2,6);
console.log(newstr);
newstr=n.slice(-8,5);
console.log(newstr)
let rat="         mice     "
console.log(rat);
console.log(rat.trim());
let url="https//423/anushka%20yadav.com"
console.log(url.replace("%20","-"));

//======================================================folow this rule to print strings if needed=======================================

console.log(`Hello World from ${n} and ${name}`);