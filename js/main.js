// esercizio uno (palindroma)
var inserireParola = prompt("inserisci parola").trim();
inserireParola = inserireParola.toLowerCase();

//invocazione
var parolaReverse = giraParola(inserireParola);
console.log("parola originale:", inserireParola);
console.log("parola reverse:", parolaReverse);


if (inserireParola == parolaReverse) {
    console.log("la parola è: palindroma");
}
else {
    console.log("la parola non è: palindroma");
}


//definizione: inverti ordine dei caratteri di una stringa
function giraParola(word) {
    var res = '';
    for (var i = word.length - 1; i >= 0; i--) {
        res += word[i];
    }
    return res;
}


//pari e dispari
// refs
var pariDispari = prompt('scegli pari o dipari').toLowerCase();
// validazione
while(pariDispari !== 'pari' && pariDispari !== 'dispari'){
    pariDispari = prompt('scegli pari o dipari').toLowerCase();
}

var userNumber = paerseInt(prompt('scegli un numero da 1 a 5'));
// validazione
while( (userNumber < 1 || userNumber > 5) || isNaN(userNumber) ){
    userNumber = paerseInt(prompt('scegli un numero da 1 a 5'));  
}
//invocazione
var computerNumber = getRandomNumber(1, 5);


//debug info
console.log(pariDispari);
console.log(userNumber);
console.log(computerNumber);

// somma dei due numeri
var somma = userNumber + computerNumber

// controllo se la somma dei due numeri è pari o dispari
var risultatoPariDispari = checkPariDispari(somma)
console.log(somma, risultatoPariDispari);

// dichiaro chi ha vinto
if(pariDispari == risultatoPariDispari){
    console.log('hai vinto');   
}
else{
    console.log('vince il computer');
    
}

//definizione
function getRandomdNumber(min, max) {
    var computerNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return computerNumber;
}

// controllo se il parametro passato è pari o dispari
function checkPariDispari(numero) {
    if (numero % 2 == 0) {
        return 'pari';
    }
        return 'dispari';
}








