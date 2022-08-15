// Check if a value is a multiple of 3 in an array by using a function.

var NUMBERS = [10, 8, 6, 3, 11, 12];

function MultipleOf3(numbers){
    numbers.forEach(number => {
        if ( number % 3 == 0){
            console.log(`${number} is a multiple of 3`);
        }
    });
}

MultipleOf3(NUMBERS)