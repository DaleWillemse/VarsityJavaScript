// Random numbers

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

// 10 random numbers between 1023 and 3201
function TenRandomNumbers() {
    let result = [];
    for (let i = 0; i < 10; i++) {
        result.push(random(1023, 3201));
    }
    return result;
}

// Random unique numbers between 1023 and 3201
function TenRandomUniqueNumbers() {
    let result = [];
    for (let i = 0; i < 10; i++) {
        let randomNumber = random(1023, 3201);
        while (result.includes(randomNumber)) {
            randomNumber = random(1023, 3201);
        }
        result.push(randomNumber);
    }
    return result;
}

// Change all numbers into a string
function ChangeToString(Numbers) {
    return Numbers.map(x => x.toString());
}

// Ends with 2
function EndWith2(Numbers) {
    return Numbers.filter(x => x.endsWith('2')).length;
}

console.log(EndWith2(ChangeToString(TenRandomNumbers())));