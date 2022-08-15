// Convert the first two exercises so that they use functions that take arguments.

// Exercise 1
var primeCount = 0;

function PrimeNumbers(num1, num2) {
    // Stores all prime numbers between num1 and num2 into an array of primeNumbers.
    let primeNumbers = [];
    for (let i = num1; i <= num2; i++) {
        let prime = true;
        for (let j = num1; j < i; j++) {
            if (i % j == 0) {
                prime = false;
            }
        }
        if (prime == true) {
            primeCount++;
            primeNumbers.push(i);
        }
    }
    return primeNumbers; // Returns an array of prime numbers between num1 and num2.
}
let prime = PrimeNumbers(2, 11);
prime.forEach(number => {
    console.log(number)
});
console.log(`No. of prime numbers: ${primeCount}`);

// Exercise 2
function FactorialDivision(num1, num2) {
    let nFactor = num1;
    let kFactor = num2;
    for (let i = 1; i < num1; i++) {
        nFactor *= i;
    }
    for (let j = 1; j < num2; j++) {
        kFactor *= j;
    }

    return (nFactor / kFactor);
}
//let result = FactorialDivision(5,10);
//console.log(result);
