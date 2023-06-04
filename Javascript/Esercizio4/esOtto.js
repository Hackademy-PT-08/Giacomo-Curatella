//inizializziamo la funzione
function myLog(msg, category) {
    switch(category){
        case 'titolo':
            console.log(`%c${msg}`, `background-color: blue; color:white; font-size: 30px`);
            break;
        case 'sottotitolo':
            console.log(`%c${msg}`, `color:blue; font-size: 20px`);
            break;
        case 'evidenziato':
            console.log(`%c${msg}`, `background-color: orange`);
            break;
        case 'errore':
            console.log(`%c${msg}`, `background-color: red; font-size: 50px; color:white`);
            break;
        default:
            console.log(`%cAttenzione: Non hai specificato nessuna colorazione`, `color: red; font-size: 18px`);
    }
}

//invochiamo la funzione e gli passiamo anche lo stile del testo da visualizzare
myLog("ciao come stai", "")


