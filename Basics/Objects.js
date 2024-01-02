// when made by constructor it is singleton
//object.create()
//when made by literals then not singleton
const sym=Symbol(123)
const user={
        myarr:['a','n','u'],
        age:20,
        name: "anu"
}


//=============2 ways to print objects=============
//console.log(user.age);
//console.log(user["age"]);
//console.log(user[sym]);
user.name="manav"
//console.log(user);
//Object.freeze(user)
user.name="anu"
//console.log(user);
user.myfun=function(){
    console.log(`hello ${this.name}`);
}
//console.log(user.myfun());

//const obj={} //not singleton

const obj=new Object() //singleton
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "anushka",
            lastname: "yadav"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);
const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d"
}
// const obj3=Object.assign({},obj1,obj2);
// console.log(obj3);
const obj3={...obj1,...obj2};
// console.log(obj3);
// console.log(obj3);
console.log(Object.keys(user));


console.log(Object.values(user));

console.log(Object.entries(user));

console.log(Object.hasOwnProperty('name'));
const course = {
    coursename: "js",
    price: "56",
    courseInstructor: "anushka"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "anushka",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]




