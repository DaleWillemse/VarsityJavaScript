// Create an application that calculates N!/K!. -Try and make it somewhat efficient.
var n = 5;
var k = 10;
var nFactorial = n;
var kFactorial = k;

for (let i = 1; i < n; i++) {
    nFactorial *= i;
}

for (let i = 1; i < k; i++) {
    kFactorial *= i;
}

console.log(nFactorial / kFactorial)