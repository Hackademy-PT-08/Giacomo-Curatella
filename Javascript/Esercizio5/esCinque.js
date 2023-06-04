//dichiariamo la nostra array
const totali = ['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3'];

//inizializziamo la funzione per il controllo punteggi
function scoreCheck(list) {
    //creiamo un contatore tenere traccia del punteggio
    let counter = 0;
    //sfogliamo gli elementi dell'array con un ciclo for
    for(let i=0; i<list.length; i++) {
        //dividiamo l'elemento corrente in altri due elementi convertendolo a sua volta in un array
        let rowData = list[i].split(":");
        //compariamo i due dati per capire quale è maggiore o uguale al secondo elemento della mini-array
        if(rowData[0] > rowData[1]) {
            counter += 3;
        }else if(rowData[0] === rowData[1]) {
            counter += 1;
        }
    }
    //torniamo il punteggio totalizzato all'esterno della funzione
    return `Il punteggio totalizzato dalla nostra squadra nel campionato è di ${counter} punti!`;
}

//invochiamo la funzione e stampiamo il risultato della funzione quindi il totale totalizzato dalla nostra squadra!
console.log(scoreCheck(totali))