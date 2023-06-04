//facciamo introdurre all'utente il voto in valore numerico da tradurre in stringa come valutazione
let v = parseInt(prompt("Inserisci un numero compreso tra 1 e 30"));

//controlliamo che il numero inserito sia prima di tutto un numero, che non sia maggiore di 30 e che non sia minore di 1
if(isNaN(v) || v > 30 || v < 1) {
    //nel caso si verificasse una di queste condizioni il programma verrebbe terminato
    console.log("Inserisci un numero compreso tra 1 e 30");
}else{
    //se il dato inserito è corretto avviamo il programma e quindi i controlli di condizione richiesti dalla traccia
    if(v < 18) {
        console.log("Traduzione: Insufficiente");
    }else if (v >= 18 && v < 21) {
        console.log("Traduzione: Sufficiente");
    }else if(v >= 21 && v < 24) {
        console.log("Traduzione: Buono");
    }else if(v >= 24 && v < 27) {
        console.log("Traduzione: Distinto");
    }else if(v >= 27 && v <= 29) {
        console.log("Traduzione: Ottimo");
    }else if(v == 30) {
        console.log("Traduzione: Eccellente")
    }
    //non includo l'else dato che il controllo del tipo e valore di dato lo faccio all'inizio
    //e l'ultima condizione richiede verifica perché il valore deve essere uguale e non maggiore di 30
    //che è il voto più alto.
}

