// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
// Sommiamo i due numeri.
// Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
// Infine, dichiariamo chi ha vinto.

function getRandomNumber(min, max) {
    var randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNumber;
}

function addNumbers(num1, num2) {
    var result = num1 + num2;
    return result;
}

function oddOrEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

var output = document.getElementById('output');

var userChoice = prompt("Scegli pari o dispari.");

var userChoiceLowerCase = userChoice.toLowerCase();

var userNumber = parseInt(prompt("Scegli un numero da 1 a 5."));

var resultNumber = getRandomNumber(1, 5);

output.innerHTML = "Hai scelto " + userChoiceLowerCase + " e hai lanciato " + userNumber + ". Il computer lancia " + resultNumber + ".";

var total = addNumbers(resultNumber, userNumber);

var gameResult = "";

if (oddOrEven(total)) {
    gameResult = "pari";
} else {
    gameResult = "dispari";
}

output.innerHTML += "</br>Il risultato è " + gameResult + ".";

if (userChoiceLowerCase == gameResult) {
    output.innerHTML += "</br>Hai vinto!!"
} else {
    output.innerHTML += "</br>Hai perso!";
}