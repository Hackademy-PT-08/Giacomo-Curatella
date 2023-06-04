//Promise initialization
let myPromise = new Promise((resolve, reject) => {
    //simulo un ritardo di 3 secondi
    setTimeout(() => {
        //dichiaro la variabile
        let momIsHappy = false;
        //nel caso in cui prendiao i dati senza problemi
        // incapsuliamo la variabile nel resolve
        if(momIsHappy) {
            resolve(momIsHappy);
        }
        //altrimenti restituiamo l'errore all'utente 
        else {
            reject(new Error(`La mamma è MOOOLTO arrabbiata!`))
        }
    }, 3000);//questo è il ritardo in millisecondi con cui verrà eseguita la fetch
});

//Promise execute
myPromise
.then(result => {//il then include il caso di successo
    console.log(`Operazione andata a buon fine la mamma è felice? => ${result}`);
})
.catch(error => console.log(`Qualcosa è andato storto: ${error}`))
//il catch gestisce l'errore e restituisce all'utente la stringa a riga 15 
//nel caso qualcosa vada storto