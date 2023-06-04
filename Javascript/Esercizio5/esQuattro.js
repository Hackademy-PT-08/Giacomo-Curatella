//dichiariamo l'array
const prodotti = ["Smartphone", "Auricolari Bluetooth", "Motorino", "Auto", "T-shirt", "Felpa con cappuccio", "Nano da giardino", "Videogioco Super Nintendo"];

//inizializziamo la funzione
function find(name) {
    
   for(let i=0; i<prodotti.length; i++) {
        if(prodotti[i].toLocaleLowerCase() === name.toLocaleLowerCase()) {
            return `articolo trovato!`;
        }
   };
   return `Articolo non presente!`;
}

//invoco la funzione e gli passo il valore da cercare
let ris;

do {
    //dichiariamo la variabile che conterrà l'inpute dell'utente
    let userInput = prompt("insersci il nome dell'articolo:");
    ris = find(userInput);
    alert(ris);
}while(ris === "Articolo non presente!" );






