// Using JSON.parse(JSON.stringify(original))

const original = {
    name: "Alice",
    age: 30,
    hobbies: ["reading", "gaming"],
    address: { city: "Wonderland", zip: "12345" }
  };
  
  const deepCopy = JSON.parse(JSON.stringify(original));
  
  deepCopy.name = "Bob";
  deepCopy.hobbies.push("coding");
  deepCopy.address.city = "New Wonderland";
  
  console.log(original);
  // Output remains unchanged
  

  // Using structuredClone
  const original = {
  name: "Alice",
  age: 30,
  hobbies: ["reading", "gaming"],
  address: { city: "Wonderland", zip: "12345" },
  date: new Date(),
  regExp: /hello/i
};

const deepCopy = structuredClone(original);

deepCopy.name = "Bob";
deepCopy.hobbies.push("coding");
deepCopy.address.city = "New Wonderland";
deepCopy.date.setFullYear(2025);

console.log(original);
// Output remains unchanged, including date and RegExp
