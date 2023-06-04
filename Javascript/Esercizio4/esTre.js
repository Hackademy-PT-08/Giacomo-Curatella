//Scrivi una funzione che accetti come parametri di ingresso due stringhe. Il primo parametro è la “frase”, il secondo la “lettera” da controllare quante volte è presente nelle frase. In output deve restituire il conteggio finale.

//Il primo parametro relativo alla frase deve essere inserito tramite prompt.

//facciamo inserire una frase dall'utente tramite prompt
let data = prompt(`Scrivi una frase e ti diro quante "A" ci sono al suo interno: `)

//dichiariamo la funzione che avrà 2 parametri in ingresso
function checkLettersInPhrase(phrase, letter) {
    //creiamo un contatore
    let counter = 0;
    //controlliamo il tipo di dato che ci sta passando l'utente, a noi va bene solo stringa!
    if (!isNaN(phrase)) {
        return "devi inserire una stringa non un numero!";
    }
    //se la verifica sopra è andata a buon fine utilizziamo un ciclo for per passare in rassegna tutte le lettera della stringa
    for(let i=0; i < phrase.length; i++) {
        //se la lettera è presente nella frase
        if (phrase.charAt(i).toLowerCase == letter.toLowerCase()) {
            //aggiungiamo 1 al contatore
            counter++;
        }
    }
    //torniamo il valore all'esterno della funzione per poterlo stampare in console
    return `La lettera A è presente nella frase ${counter} volte!`;
}

//salviamo il risultato all'interno della variabile ris
let ris = checkLettersInPhrase(data, "a")
//stampiamo il risultato in console!
console.log(ris)
