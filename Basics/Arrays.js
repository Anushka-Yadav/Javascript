
const myarr=[1,3,4,5,6];

console.log(myarr[4]);
 myarr.push(10);
 
console.log(myarr);
myarr.pop();

console.log(myarr);

myarr.unshift(4)
console.log(myarr);
myarr.shift(4)
console.log(myarr);

console.log(myarr.includes(3));
console.log(myarr.reverse());


const newarr=myarr.join()


const newar=myarr.slice(1,3)
console.log("A",myarr);
console.log(newar);
const newar2=myarr.splice(1,3) // in this original array is sliced fully and changed and consist of only remaining elements
console.log("b",myarr);
console.log(newar2);


const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)

console.log(marvel_heros);
console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("anushka"))
console.log(Array.from("anushka"))
console.log(Array.from({name: "anushka"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));





