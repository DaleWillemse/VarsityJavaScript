// A special data structure that allows you to store collections of values in a linear fashion.

let arrA = new Array(); // Array constructor. 
// "new" creates an instance and allocates space on memory.
let arrAb = new Array(3) // Array of length 3, with each value undefined.
let arrAc = new Array(3, 5) // Array with two elements.

let arrB = []; // Most used declaration method.
let fruits = ["apple", "banana", "pineapple"]; 

// Array literal
let arrBb = [3, 1, "wait for it", () => { return "hi" }, 8, true];


arrBb.forEach(element => {
    console.log(element)
});
