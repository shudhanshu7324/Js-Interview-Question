// spread in array
const numbers = [1, 2, 3];
console.log(...numbers); // Output: 1 2 3

// copying array
const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [...arr1];

console.log(arr1);
console.log(arr2);

// merging array
const arr3 = [23, 34, 45];
const arr4 = [76, 54, 32];
const mergedArray = [...arr3, ...arr4];
console.log(mergedArray);

// spread in objects
const user = {
  name: "John",
  age: 30,
  gender: "male",
};

console.log({ ...user });

// copying object
const user1 = {
  name: "Xyz",
  age: 23,
  gender: "female",
};

const user2 = { ...user1 };

console.log(user2);


// merging objects
const user5 = { name: "Carol", age: 25 };
const preferences = { theme: "dark", notifications: true };
const mergedUser = { ...user5, ...preferences };

console.log(mergedUser);

// If properties overlap, the value from the last object spreads will overwrite the previous ones.
