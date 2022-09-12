// Guessing game.

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

function guessGame(asnwer) {

    let guess = prompt("Guess a number between 1 and 20");
    let tries = 0;
    let previousGuesses = [];

    while (tries < 3) {
        if (guess == asnwer) {
            alert("You guessed correctly");
            break;
        }
        else if (previousGuesses.includes(guess)) {
            guess = prompt("You have already guessed that number. Try again");
        }
        else {
            previousGuesses.push(guess);
            if (guess > asnwer) {
                guess = prompt("Your guess is too high. Try again");
            }
            else {
                guess = prompt("Your guess is too low. Try again");
            }
            tries++;
        }
    }
    if (tries == 3) {
        alert(`Sorry you used all your tries, the answer was ${asnwer}`);
    }
}

guessGame(random(1, 20));