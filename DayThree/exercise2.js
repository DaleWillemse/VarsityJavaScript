// Find the mutiples of x.
// stops at the first occurance and prints the value.

var NUMBERS = [5, 2, 3, 4, 1, 11, 12, 5, 6];

function FindMultiples(numbers, multiple) {
    let found = false;
    let n = 0;
    numbers.forEach(number => {
        if (found == false) {
            if (number % multiple == 0) {
                found = true;
                n = number;
            }
        }
    });
    return n
}

console.log(FindMultiples(NUMBERS, 6));