//Palidroma

var userWord = prompt('insert word');
var turnedWord = invertWord(userWord) ;

if (userWord == turnedWord) {
    console.log ("the word is Palindroma");
}
else {
    console.log("the word is not palindroma")
}
function invertWord(word) {
    var invertedWord = "";
    for (var i = word.length -1; i >= 0; 1--) {
        invertedWord += word[i]
    }
    return invertedWord;
}


//pari e dispari

//invocazione
var pariDispari = prompt ('scegli pari o dipari');
var userNumber = paerseInt (prompt('scegli un numero da 1 a 5'));
var computerNumber = getRandomNumber(1,5);
var somma = userNumber + computerNumber

//definizione
function getRoundNumber (min, max) {
    var res = Math.floor(Math.random() * (max - min + 1)) + min;
    return res
}
    if (somma % 2 == 0) {
        console.log(somma + 'pari');
    }
    else {
        console.log (somma + 'è dispari')
    } 



    

