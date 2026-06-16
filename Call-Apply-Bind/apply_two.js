// Invokes the function immediately but arguments are passed as an array.

function greet(city,country){
    console.log(`Hi, I'm ${this.name} from ${city} , ${country}`);
}

const person = {
    name: 'shudhanshu'
}

greet.apply(person, ['patna','india'])

