// hoisting and temporal deadzone
// global execution context
// call stack
// task queue and micro task queue
// event loop
// web api

// wehnever we run a javascript code a global execution context gets created and global execution context have two phase
// 1st phase -> memory phase
// 2nd phase -> code phase

// whenever we run the code the javascript scans the whole code and the number of variable was there they load all the variable in the memory phase

// every variable which gets created in the initial memory phase have the value undefined

// in the 2nd phase i.e. code phase the code gets executed line by line

console.log("value of x is: ",x)
var x = 5;