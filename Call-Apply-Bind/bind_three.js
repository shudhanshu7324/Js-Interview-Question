// Does not execute immediately. It returns a new function with this permanently bound.

const person = {
    name: "Shudhanshu"
};

function greet(city) {
    console.log(`Hi, I am ${this.name} from ${city}`);
}

const boundGreet = greet.bind(person);

boundGreet("Darbhanga");

// polyfills for bind -> famous interview question
Function.prototype.myBind = function(context, ...args) {
    const fn = this;

    return function(...newArgs) {
        return fn.apply(context, [...args, ...newArgs]);
    };
};


// usage
function greet(city) {
    console.log(`${this.name} from ${city}`);
}

const person = { name: "Shudhanshu" };

const boundFn = greet.myBind(person);

boundFn("Darbhanga");