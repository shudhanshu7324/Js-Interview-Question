// Rest Operator in Function Parameters
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3)); // Output: 6

// Spread Operator in Function Calls
const nums = [1, 2, 3];
console.log(sum(...nums)); // Output: 6

// rest operator in array
const numbers = [10, 20, 30, 40, 50];
const [first, second, ...rest] = numbers;

console.log(first);  // Output: 10
console.log(second); // Output: 20
console.log(rest);   // Output: [30, 40, 50]


// rest operator in object
const person = {
    name: 'Alice',
    age: 30,
    city: 'Wonderland',
    occupation: 'Adventurer'
  };
  
  const { name, age, ...details } = person;
  
  console.log(name);    // Output: Alice
  console.log(age);     // Output: 30
  console.log(details); // Output: { city: 'Wonderland', occupation: 'Adventurer' }
  