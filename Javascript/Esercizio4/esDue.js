//Scrivi una funzione che prenda in input due argomenti e restituisca TRUE se i due argomenti sono IDENTICI, FALSE altrimenti.

//creiamo la funzione che accetterà due elementi(parametri)
function checkIfElementsAreEquals(elemOne, elemTwo) {
    //controlliamo prima se sono IDENTICI
    // if (elemOne === elemTwo) {
    //     let res = "I due elementi sono IDENTICI!";
    //     return res;
    // }
    // //notifichiamo all'utente che gli elementi sono diversi sia di valore che di TIPO
    // return ("I tuoi due elementi non si assomigliano affatto!")
    return elemOne === elemTwo;
}
//salviamo il risultato in una variabili
let check = checkIfElementsAreEquals(1, 1);
// facciamo un log in console della risposta
console.log(check);