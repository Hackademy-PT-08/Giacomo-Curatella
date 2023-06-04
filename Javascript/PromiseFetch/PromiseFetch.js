// promise e fetch

/* 
da quì in poi possiamo sfruttare l'asincronismo e quindi non rispettare più la sequenzialità di JS
l'asincronismo ci viene in aiuto per caricare delle risorse dal server con calma mentre tutto l'altro codice viene eseguito
per questa operazione ci viene in aiuto un costrutto o costruttore
gestiamo operazione incomplete nel momento in cui le chiediamo ma che saranno completate in futuro ecco perché il nome promise

la promise può avere 3 stati: pending, resolved(fullfilled), rejected(quando viene respinta)

la promise dopo il primo stato inizialie può andare o in una direzione o in un'altra non può mai rispettare entrambi

quindi creiamo l'oggetto promise e passiamo come parametro in ingresso una funzione con due parametri che si chiameranno resolve e rejected

*/

const test = "Ciao sono la stringa di test!"
let final;

//la promise
const promise = new Promise((resolve, reject)=> {
    //resolve e reject sono parametri impliciti della promise
    //simuliamo un operazione asincrona con un ritardo di 2 secondi
    setTimeout(() => {
        
        const num = Math.random();

        if( num < 0.5){
            //se il numero casuale è minore di 0.5 la promise è completata
            resolve(num)//resolve come reject è un metodo
        } else {
            //altrimenti la primise viene respinta
            reject(new Error("Errore durante l'esecuzione dell'operazione"));
        }

    }, 2000);
});


//utilizziamo un metodo chiamato then per gestire il caso di adempimento della promise ed il metodo cacht per gestire l'errore

//tutto ciò che mandiamo con il resolve viene accolto dentro il nostro .then
promise
.then(result => {
    console.log("operazione completata con successo: " + result);
    //salviamo il risutalo nella variabile "final"
    final = result;
    //la visibilita della variabile rimarrà solo in questo ambito del then qundi la funzione la dobbiamo invocare quì dentro e passargli come parametro "final".
})
//tutto ciò che sarà considerato "fattilo" verrà accolto dentro il ".catch"
.catch(error => {
    console.log("Si è verificato un errore" + error);
})

//questa riga di codice verrà eseguita subito indipendentemente dallo stato della funzione precedente..se completa o no il restante codice viene eseguito
console.log(test)



//__________________________________________________________________________________________________________________________________________
//real promise
function fetchUserData() {

    return new Promise((resolve, reject) => {
        //simuliamo una richiesta api con un ritardo di 2 secondi
        setTimeout(() => {
            let userData = {
                name: "John",
                id: 1,
                age: 20,
                email: "john@mail.it"
            };

            if(userData) {
                //restituiamo i dati
                resolve(userData);
            }
            //se va male 
            else {
                reject(new Error("Impossibile recuperare i dati Utente!"))
            }

        }, 22000)
    })
}


fetchUserData().then(data => {console.log(data)}).catch(error => {console.log("Si è veirifato un errore: " + error)})
//___________________________________________________________________________________________________________________________________


//per invocare consecutivamente concatenando le promise(chaning di più promises)
fetchUserData()
.then(user => {
    console.log(user)
})
.then(fetchUserSubscription)
.then(subscription => {
    console.log(subscription)
})
.catch(error => {
    console.log(error)
});


//____________________________________________________________________________________________________________________-+
//il promise all accetta come parametro in ingresso un array di promises
//gestisce tutte le promise nello stesso ordine in cui vengono pushate ma se una delle due va male
// andremo sempre a finire nel "catch"
//i risultati arriveranno nello stesso momento perché apparterranno alla stessa array di risultati
// che verrà restituita
promise.all([fetchUserData, fetchUserSubscription])
.then(responses => {
    console.log(responses)
})
.catch(errors => {
    console.log(errors)
})


//__________________________________________________________________________________________________________________________--
//JSON javascript object notation
//json mette a disposizione 2 metodi interessanti

//ATTENZIONE: il JSON vuole le apici sia per le chiavi che per i valori

//rende un oggetto sottoforma di stringa
JSON.stringify(file);
//rende una strina sottoforma di oggetto
JSON.parse(file)

// ________________________________________________________________________________________________________________________________________________________
//con fetch() possiamo connettere il nostro codice ad una URL

//il fetch non fa altro che fare una promise
fetch("../percorso/nomefile")
    //parsiamo l'oggetto in json
    .then(response => response.json())
    //dopo averla parsata la stampiamo in console
    .then(products => {
        console.log(products)

        products.forEach(product => {
            console.log(product.title);
        });
    })
