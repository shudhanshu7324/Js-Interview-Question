// every function has its own global execution context in the code phase

console.log("Execution starts")
var globalVariable = "I'm a global variable"

console.log(globalVariable)
globalFunction()

console.log("Excution ends")

 function globalFunction(){
    console.log("Inside global function")
}