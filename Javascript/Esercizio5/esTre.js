//dichiariamo l'array
let myArray = [1, -4, 7, 12];

//inizializziamo la funzione
function sumMyNumbers(list) {
    //creiamo un contatore
    let counter = 0;
    //sfogliamo tutti i numeri dell'array
    for(let i=0; i<list.length; i++) {
        //controlliamo che il numero attuale sia pari
        if(list[i] > 0) {
            //se pari aggiuniamo quel numero al contatore
            counter += list[i];
        }
    }
    //ritorniamo fuori della funzione il valore di counter
    return `La somma di tutti i numeri POSITIVI è: ${counter}`;
    
}
//lo printiamo in console per l'utente
console.log(sumMyNumbers(myArray))
