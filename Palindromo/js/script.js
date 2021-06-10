var output = document.getElementById('output');

var userWord = prompt("Scrivi una parola.");

var userWordPalindrome = "";

for (var i = userWord.length - 1; i >= 0; i--) {
    userWordPalindrome += userWord[i]; 
}

if (userWord == userWordPalindrome) {
    output.innerHTML = "La parola è palindroma!";
} else {
    output.innerHTML = "La parola non è palindroma.";
}