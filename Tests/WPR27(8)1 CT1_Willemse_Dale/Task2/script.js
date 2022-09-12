// Finding the square root of array values.

function SquareRoot(numbers) {
    let sqrtNumbers = [];

    numbers.forEach(number => {
        sqrtNumbers.push(Math.sqrt(number));
    });

    return sqrtNumbers
}


// let numbers = [4, 9, 16]
// let testNumbers = SquareRoot(numbers)

// testNumbers.forEach(element => {
//     console.log(element)
// });