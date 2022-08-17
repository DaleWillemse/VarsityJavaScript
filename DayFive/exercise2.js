// Create an array in a function and print only the numbers from the array returned.

let MyArray = () => {
    let x = [3, true, 6, "number", ["foo", "bar"], 8, 9];
    return x;
}

let x = MyArray();

x.forEach(element => {
    if (typeof (element) === "number") {
        console.log(element)
    }
});
