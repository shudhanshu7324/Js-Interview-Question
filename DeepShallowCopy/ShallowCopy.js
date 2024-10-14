const user1 = {
    firstName:"John",
    lastName:"Doe",
    age:"32",
    address:{
        area:"RT Nagar",
        city:"New Delhi",
        pincode: 710003
    }
}

// copy using object.assign
const user2 = Object.assign({},user1);

user2.firstName = "Jaypee"
user2.address.pincode = 812003 // here this thing will only change in original object
console.log(user1);
console.log(user2);

// copy using spread operator
const original = { a: 1, b: { c: 2 } };
const copy = { ...original };

copy.a = 10;
copy.b.c = 20;

console.log(original); // Output: { a: 1, b: { c: 20 } }
console.log(copy);     // Output: { a: 10, b: { c: 20 } }



// SHALLOW COPY OF ARRAY
const originalArray = [1, 2, [3, 4]];
const copyArray = [...originalArray];

copyArray[0] = 10;
copyArray[2][0] = 30;

console.log(originalArray); // Output: [1, 2, [30, 4]]
console.log(copyArray);     // Output: [10, 2, [30, 4]]


const original = [1, 2, [3, 4]];
const copy = original.slice();

copy[0] = 10;
copy[2][0] = 30;

console.log(original); // Output: [1, 2, [30, 4]]
console.log(copy);     // Output: [10, 2, [30, 4]]


// Limitations
/*
Nested Objects: Shallow copies do not clone nested objects or arrays. They only copy references to them.
Immutability Issues: Modifying nested structures in the copy affects the original object, leading to potential bugs.
*/