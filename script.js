//Create a function that takes two numbers as parameters and returns their sum. 
function Sum(num1, num2){
    return num1+num2;
}
const sum = Sum(5,10);
console.log(sum);

//Write a function that takes an array of numbers as a parameter and returns the average of those numbers.
function ArrayAverage(numbers){
    if (numbers.length === 0){
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    let average = sum / numbers.length;
    return average;
}

const arr0 = [98,89,86,99,98];
const average = ArrayAverage(arr0);
console.log(average);

//Create a function that checks whether a given number is even or odd. The function should return "Even" if the number is even and "Odd" if the number is odd. 
let EvenOrOdd = (number) => {
    let checker = number % 2;
    if (checker === 0){
        return 'Even';
    }
    else{
        return 'Odd';
    }
}

const num1 = 5;
const EvenOdd = EvenOrOdd(num1);
console.log(EvenOdd);


//Write a function that takes a string as a parameter and counts the number of vowels in the string. Return the count.
let countVowels = (word) =>{
    const vowels =['a', 'e', 'i', 'o', 'u'];
    const lowercase = word.toLowerCase();
    let count = 0;
    for (let i = 0; i < lowercase.length; i++){
        if(vowels.includes(lowercase[i])){
            count++;

        }
    }
    return count;
}

let  word = 'Benedict';
let vowelCount = countVowels(word);
console.log(vowelCount);

// Implement a function that reverses a given string. For example, if the input is "hello," the function should return "olleh."
let reverseString = (word) =>{
    return word.split("").reverse().join("");
}

let reverse = (word) => {
    let reversed = '';
    for (let i = word.length - 1; i >= 0; i--){
        reversed += word[i];
    }
    return reversed;
}

const word1 = 'hello';
const stringReverse = reverseString(word1);
const esrever = reverse(word1);
console.log(stringReverse);
console.log(esrever);

//Create a function that takes an array of strings as a parameter and returns the longest string in the array.
let longestString = (words) =>{
    let longest = '';
    for (let i = 0; i < words.length; i++){
        if (words[i].length > longest.length){
            longest = words[i];
        }
    }
    return longest;
}

const arr1 = ['Benedict', 'Alex', 'Jay', 'Kristofersen', 'Karl'];
const stringLongest = longestString(arr1);
console.log(stringLongest);

// Write a function that checks whether a given string is a palindrome. Return true if it is, and false otherwise. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward.
let checkPalindrome = (word) =>{
    const reversed = word.split("").reverse().join("");
    if (word === reversed){
        return true;
    }
    else {
        return false;
    }
}

const word2 = 'racecar';
const palindormeChaeck = checkPalindrome(word2);
console.log(palindormeChaeck);

// Implement a function that calculates the factorial of a given number. The factorial of a non-negative integer n is the product of all positive integers less than or equal to n.
let factorial = (number) =>{
    if (number === 0 || number === 1){
        return 1;
    }
    let  num1 = 1;
    for (let i = 2; i <= number; i++){
        num1 *= i;
    }
    return num1;
}

const num2 = 8;
const Factorial = factorial(num2);
console.log(Factorial);

//Create a function that takes an array of numbers as a parameter and returns a new array with only the positive numbers from the original array.
let getPositiveNumbers = (numbers) =>{
    return numbers.filter(number => number > 0);
}

const arr2 = [-2, -1, 0, 1, 2];
const numbersPositiveGet = getPositiveNumbers(arr2);
console.log(numbersPositiveGet);

//Write a function that takes a sentence as a parameter and returns the number of words in the sentence.
let countWords = (sentence) =>{
    const sentenceToWords = sentence.split(" ");
    return sentenceToWords.length;
}

const sentence = 'Death is a natural part of life. Rejoice for those around you who transform into the Force. Mourn them do not. Miss them do not. Attachment leads to jealously. The shadow of greed, that is.';
const wordsCount = countWords(sentence);
console.log(wordsCount);