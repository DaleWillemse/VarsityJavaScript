// Create a function that takes two arrays as an argument and joins them
// without using any in-built methods, except length.

let a = [1, 2, 3, 4];
let b = [5, 6, 7, 8];

function JoinArrays(arrA, arrB) {
    // Fast way
    // for (let i = 0; i < b.length; i++) {
    //     a[a.length] = b[i]    
    // }
    // The easiest way
    // let c = a.concat(b)
    
    let newArray = [];

    for (let i = 0; i < arrA.length; i++) {
        newArray[i] = arrA[i];
        if (i == arrA.length - 1) { // finding out if we're at the end of an array
            let count = i + 1;
            for (let j = 0; j < arrB.length; j++) {
                newArray[count] = arrB[j]
                count += 1
            }
        }
    }
    return newArray;
}

let newArray = JoinArrays(a, b);

newArray.forEach(element => {
    console.log(element)
});
