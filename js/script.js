// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
// Sommiamo i due numeri.
// Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
// Infine, dichiariamo chi ha vinto.

var output = document.getElementById('output');

var oddOrEven = prompt("Scegli pari o dispari.");

var userNumber = parseInt(prompt("Scegli un numero da 1 a 5."));

function getRandomNumber (min, max) {
    var computerNumber = Math.floor(Math.random * (max - min + 1)) + 1;
    return computerNumber;
}

var sum = userNumber + getRandomNumber(1, 5);

output.innerHTML = sum;

// function getNumberStatus (num) {
//     var numberStatus = false;

//     if (num % 2 === 0) {
//         numberStatus = true;
//     }

//     return numberStatus;
// }