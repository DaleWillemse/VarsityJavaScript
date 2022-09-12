// Find the second highest value in an array.

function SecondHighest(numbers) {

    let highest = 0;
    let secondHighest = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > highest) {
            secondHighest = highest;
            highest = numbers[i]
        }
    }
    return secondHighest
}

// let arrNumbers = [5, 33, 8, 9, 1, 2, 56, 7]
// let secondHighest = SecondHighest(arrNumbers);
// console.log(secondHighest)