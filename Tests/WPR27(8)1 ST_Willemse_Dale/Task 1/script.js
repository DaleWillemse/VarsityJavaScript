// Array of words

var words = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];

// Function that counts the words bigger than 4.
function strBiggerThanFour(words) {
    let count = 0;
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > 4) {
            count++;
        }
    }
    return count;
}

console.log(strBiggerThanFour(words));

// Function that returns second largest word.
function secondLongest(words) {
    let longest = 0;
    let secondLongest = 0;
    let secondLongestWord = "";
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > longest) {
            secondLongest = longest;
            longest = words[i].length;
            secondLongestWord = words[i];
        } else if (words[i].length > secondLongest) {
            secondLongest = words[i].length;
        }
    }
    return secondLongestWord;
}

console.log(secondLongest(words));

// Function that returns true if input word is part of array.
function findWord(words, word) {
    for (var i = 0; i < words.length; i++) {
        if (words[i] === word) {
            return true;
        }
    }
    return false;
}

console.log(findWord(words, "Rock"));
console.log(findWord(words, "Boulder"));