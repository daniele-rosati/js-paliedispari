// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// Su internet ci sono soluzioni con join e reverse, non potete usarle!
// Consigli del giorno
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

// creo le funzioni necessiare che mi servono:
// 1- funzione per generare un numero casuale 
function generateCasualNumber(){
    return Math.floor(Math.random() * 5 ) + 1;
}

// 2- funzione che ci permette di derterminare se il numero è pari o dispari
function isEven(number){
    return number % 2 === 0;
}

// 3- funzione che ci permette di vedere se la parola inserita dall'utente è palidroma 
function isPalindrome(word){
    
    for (let i = 0; i < word.lenght; i++){
        if (word[i] !== word[word.lenght - 1 - i]) {
            return false;
        }
    }
    return true;
}

// 4- funzione contenente le 'funzioni del pari e dispari'
function playEvenorUneven(){
    const userChoice = prompt(" Sceglia pari o dispari: ");
    const userNumber = parseInt (prompt("Inserisci un numero da 1 a 5: "));
    const computerNumber = generateCasualNumber();
    const sum = userNumber + computerNumber;
    // per questa la const result ho cercato qui https://www.html.it/pag/15220/operatori1/
    const result = isPari(sum) ? "pari" : "dispari";

    alert ("il numero scelto dal computer è ${computerNumber}. La somma è ${sum}, il ${result} è: ");

    // se userChoice è strettamente uguale a pari e a pari(somma) or userChoice è strettamente uguale a dispari o non pari(somma)
    // allora 
    // hai vinto 
    // hai perso
    if ((userChoice === "pari" && isEven(sum)) || (userChoice === "dispari" && !isEven(sum))){
        alert("Hai vinto! Congratulazioni.")
    } else{
        alert("Hai perso! Il computer ha vinto. Riprova di nuovo.")
    }
}

// 5- funzione contente le 'funzioni parola palidroma'
function playisPalindrome(){
    const word = prompt ("Inserisci una parola: ");


    if (isPalindrome(word)){
        alert("Congratulazioni! La parola scelta è palindroma.");
    } else {
        alert("La parola scelta non è palindroma! Prova di nuovo")
    }
}

// l'utente ha la possibilità di scegliere quale modalità "giocare"

const gamechoosed = prompt("Scegli: pari/dispari o parola palindroma?");
if (gamechoosed === "pari/dispari"){
    playEvenorUneven();
} else if (gamechoosed === "parola palindroma"){
    isPalindrome();
} else {
    alert("Scelta non valida. ");
}


