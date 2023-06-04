// tabellina di un numero

// input dati dall'utente, salviamo il numero scelto nella variabile num
let num = parseInt(prompt("Inserisci un numero per conoscerne la tabellina:"));

//utilizziamo un ciclo for per stampare tutte le combinazioni della nostra tabellina
for(let i = 0; i <= 10; i++) {
    //salviamo il risultato dell'operazione nella variabile calc
    let cal = num * i;
    //stampiamo il risultato dell'operazione fin quando i sarà minore o uguale a 10
    console.log(`${num} X ${i} = ${cal}`)
}