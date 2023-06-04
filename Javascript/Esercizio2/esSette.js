let totGatti = 18;
let numGattiPerFila = 5;

let totaleFile = Math.ceil(totGatti / numGattiPerFila);
console.log("In tutto abbiamo " + totaleFile + " FILE");

let nuovaRiga = ((totaleFile + 1) * numGattiPerFila - totGatti) - numGattiPerFila;
console.log(`Occorrono ${nuovaRiga} gatti per formare una nuova fila!`);