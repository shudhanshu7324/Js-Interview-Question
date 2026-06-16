// normal
// function add(a,b,c){
//     return a+b+c;
// }

// with currying using closures
// function add(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         }
//     }
// }

// console.log(add(2)(3)(5));

// example 2
// function sendAutoEmail(to){
//     return function(subject){
//         return function(body){
//             console.log(`Sending email to ${to} with subject ${subject}: ${body}`)
//         }
//     }
// }

// let step1 = sendAutoEmail('shudhanshu7324@gmail.com');
// let step2 = step1('Order Confirmation')
// let step3 = step2("Hey Shudhanshu here is something for you")

// converting ex2 to es6 standard

const sendAutoEmail = (to) => (subject) => (body) =>
  `Sending email to ${to} with subject ${subject}: ${body}`;

let step1 = sendAutoEmail('shudhanshu7324@gmail.com');
let step2 = step1('Order Confirmation')
let step3 = step2("Hey Shudhanshu here is something for you")
console.log(step3);
