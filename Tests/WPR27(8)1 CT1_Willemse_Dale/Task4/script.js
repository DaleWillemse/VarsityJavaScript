// Replace all odd numbers with "0" and all even numbers with "1".

function EvenOrOdd(arr) {
    for (let r = 0; r < arr.length; r++) {
        for (let c = 0; c < arr[r].length; c++) {
            if (typeof (arr[r][c]) === "number") {
                if (arr[r][c] % 2 == 0) {
                    arr[r][c] = 1
                }
                else {
                    arr[r][c] = 0;
                }
            }
        }
    }
    return arr
}


// let testArr =
//     [
//         [12, 5, 'c', 9, 8, 'z'],
//         [2, 2, 'c', 'c', 9, 8, 'c'],
//         [12, 'l', 'p', 7, 8, 'c']
//     ]

// let newArr = EvenOrOdd(testArr)

// newArr.forEach(element => {
//     console.log(element);
// });