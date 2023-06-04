//prendiamo la riposta dell'utente
let ris = prompt(`Indovina se il numero è pari o dispari, quindi scrivi "pari" o "dispari": `);
//inizializzo la funzione per generare un numero casuale tra 1 e 10
function genNumber() {
    //generiamo il numero
    const num = Math.ceil(Math.random(1)*10);
    //ritorniamo il valore all'esterno della funzione
    return num;
}
//salviamo il numero nella variabile number
let number = genNumber();

//inizializzo la funzione per giocare
function playNow(choise, getNumber) {
    //controlliamo se l'utente ha inserito una delle due opzioni disponibili altrimenti gli restituiamo l'errore
    if(choise.toLowerCase() != "pari" && choise.toLowerCase() != "dispari") {
        alert("Devi digitare una delle due opzioni");
        return;
    }
        //controlliamo che il numero sia pari
        let finalNum = getNumber % 2;
        //se le condizioni sotto dichiarate sono vere l'utente avrà vinto
        if(finalNum == 0 && choise == "pari" || finalNum == 1 && choise == "dispari") {
            console.log(`E' uscito il numero ${number} e tu avevi previsto ${choise}`);
            console.log("Bravissimo, hai indovinato!");
        }else{
            //altrimenti comunicheremo all'utente che ha perso
            console.log(`E' uscito il numero ${number} e tu avevi previsto ${choise}`);
            console.log("Ritenta, sarai più fortunato")
        }
    
}
//invochiamo la funzione
playNow(ris, number)















