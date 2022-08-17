let arr1 = [1, 2, 3, 4, 5]
let arr2 = [2, 1, 4, 5, 3]
let arr3 = [1, 2, 3, 5, 4]

let mArr = [arr1, arr2, arr3];

console.log(mArr[1][1]) // position of the "1" in arr2.

// looping through a multi-dimension array

mArr.forEach(element => { // Printing the array.
    console.log(element)
});

mArr.forEach((subArr) => { // Printing array numbers individually
    subArr.forEach(element => {
        console.log(element)
    });
});