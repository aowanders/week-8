// Write a program that checks if a number is positive, negative or zero.
let num = 0;
if (num > 0) {
    console.log('My number is positive and greater than zero');

}if (num < 0) {
    console.log('My number is negative because it is less than zero');

}else{
    console.log('My number equals exactly zero');
}
console.log(num);

// Write a program that checks if a number is even or odd.
let mynum = 8;
if (mynum % 2 === 0){ 
    console.log ('Mynum is bigger even because the remainder is zero');

}else {
    console.log('Mynum is an odd because the remainder does not equal zero ')

}
console. log(mynum);
// Write a program that checks if a year is a leap year or not.
const leapYear = 366;

if (leapYear === 366){
    console.log('This would be a leap year')

}else {
    console.log('This is not a leap year');
}

// Write a program that checks if a character is a vowel or not.
const letter = 'd';

if (letter === 'a' || letter === 'A'){
    console.log('This letter is a vowel');
}else if (letter === 'e'|| letter === 'E'){
    console.log('This '+ letter + ' is a vowel.');

}else  if(letter === 'i' || letter === 'I'){
    console.log('This '+ letter + ' is a vowel.');
}else if (letter === 'o' || letter === 'O'){
    console.log('This '+ letter + ' is a vowel.');
}else if (letter === 'u' || letter === 'U'){
    console.log('This '+ letter + ' is a vowel.');
}else {
    console.log ('This ' + letter + ' is NOT a vowel');
}
console.log(letter);
// Write a program that checks if a number is divisible by 3 and 5 or not.
const divNumber= 183;
if (divNumber % 3 === 0){
    console.log('My ' + divNumber + ' is divisible by 3!');
}else if (divNumber % 5 === 0) {
    console.log('My '+ divNumber + ' is divisible by 5!');

}else {
    console.log('This ' + divNumber + ' is not divisible by 3 or 5!!')
}
console.log(divNumber);
// Write a program that checks if a number is a prime number or not.
let isPrime = 20;

if (isPrime % 2 === 0){
    console.log (isPrime + ' is not a prime number!');
}else {
    console.log(isPrime + ' is a prime number because it can only be divided by itself or the number 1.');
}
console.log(isPrime);
// Write a program that checks if a number is within a given range (for example, between 1 and 100).
const numRange = 38;

if (numRange > 1 && numRange < 100){
    console.log(numRange + 'is between 1-100 which is exactly what we are looking for.');
}

// Write a program that checks if a number is positive, negative, or zero, and displays an appropriate message.
const randomNumber = 108;
if (randomNumber > 0){
    console.log(randomNumber + ' is a positive number!');

}else if (randomNumber < 0) {
    console.log(randomNumber + ' is a negative number!')
}else {
    console.log(randomNumber + ' is zero!')
}
console.log(randomNumber);


// Write a program that checks if a number is divisible by 2, 3, or 5.
const checkingNumbers = 20;

if (checkingNumbers % 5 ===0 ){
    console.log(checkingNumbers + ' is divisible by 2!');
}else if (checkingNumbers % 3 === 0){
    console.log(checkingNumbers + ' is divisible by 3!');
}else if(checkingNumbers % 2 === 0) {
    console.log(checkingNumbers + ' is divisible by 5!');

}else {
    console.log(checkingNumbers + ' still trying to figure out what this is divisible by, be patient buddy!')
}
console.log(checkingNumbers);

// Write a program that checks if a letter is uppercase or lowercase.
const textSample = 'Sanders is AWESOME sauce 21.';
let i = 0;
let word = ''
while (i <= word.length){
    console.log(i <= word.length,  ' while loop first line')
    word = word.charAt(i);
    console.log(word);
    if (i * 1){
        console.log('character is a number and wont have upper or lower case letters.');
    }else if (word == word.toUpperCase()) {
        console.log('this is an uppercase letter');

    }else if (word == word.toLowerCase()){
        console.log('this letter is a lowercase letter')

    }
    i++;
}console.log(word);

// Hope these questions help you practice! Good luck!