// Functions
function AddNumberA(a, b) {
    return a + b;
}

// Functions Expressions
// Functions are values, like a string or an integer.
let AddNumberB = function (a, b) {
    return a + b;
}

AddNumberB(2, 3);

// Arrow functions, the basics.
let AddNumberC = (a, b) => {
    return a + b;
}

AddNumberC(2, 3);