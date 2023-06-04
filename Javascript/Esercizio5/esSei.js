//dichiariamo la variabile che conterrà la frase da analizzare
let phrase = "Ciao sono un esercizio sui metodi degli array";

//inizializzo la funzione
function checkFirstLetters(stringa) {
    //dichiaro un array dove pushare tutte le prime lettere di ogni parola
    let finalArray = [];
    //converto la stringa in array
    const arrayPhrase = stringa.split(" ");
    //sfoglio tutti gli elementi dell'array
    for(let i=0; i < arrayPhrase.length; i++) {
        //aggiungo alla finalArray tutti i primi caratteri di ogni elemento trovato
        finalArray.push(arrayPhrase[i].charAt(0))
    }
    //trasformo la finalArray in strina
    let finalPhrase = finalArray.join("");
    //ne ritorno il contenuto
    return finalPhrase;
}

//invoco la funzione passando il parametro e ne restituisco il risultato in console
console.log(checkFirstLetters(phrase));