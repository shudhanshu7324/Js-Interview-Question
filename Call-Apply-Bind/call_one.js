// call(), apply(), bind() are used to control the value of this when calling a function. -> basically in simple term they are used to borrow a function to a object.

//  1. call() -> Invokes the function immediately and passes arguments one by one.

function greet(city, country) {
  console.log(`Hi, I'm ${this.name} from ${city}, ${country}`);
}

const person = {
  name: "shudhanshu",
};

greet.call(person, "patna", "india");

// call() -> executes immediately and takes arguments as comma seperated.