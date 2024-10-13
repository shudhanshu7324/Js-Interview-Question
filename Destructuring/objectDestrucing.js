// const user = {
//     name:"John",
//     country:"India",
//     age:30
// }

// const {name,country,age} = user;

// console.log(name);
// console.log(country)
// console.log(age)


// adding default parameter
const user = {
    name:"John",
    country:"India",
    age:30,
}

const {name,country,age,gender="male"} = user; // if the gender is null then it will not work but if it is undefined then it will work.

console.log(name);
console.log(country)
console.log(age)
console.log(gender);

