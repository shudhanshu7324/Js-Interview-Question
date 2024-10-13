// const array = [1, 2, 3, 4, 5];
// const [a, b, c, d, e] = array;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// swapping  values
// let a = 1;
// let b = 2;

// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// rest operator
// const array = [1, 2, 3, 4, 5];
// const [a, b, ...rest] = array;
// console.log(a);
// console.log(b);
// console.log(rest);

// skipping values
const array = [1, 2, 3, 4, 5];
const [,b , ...rest] = array;  // here the value a get skipped
console.log(b);
console.log(rest);