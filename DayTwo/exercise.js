// Find all the prime numbers between 2 and 6000
var primeCount = 0;

for (let i = 2; i <= 6000; i++) {
    let primeNum = true;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            primeNum = false;
        } else if (j >= (i / 2)) {
            break;
        }
    }
    if (primeNum == true) {
        console.log(i);
        primeCount++;
    }
}
console.log(primeCount)