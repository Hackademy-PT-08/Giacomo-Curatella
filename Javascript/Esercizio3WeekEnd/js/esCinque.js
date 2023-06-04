let strikesNumber = 3;
let playerOne;
let playerTwo;
let risPlayerOne = [];
let risPlayerTwo = [];
let finalRisPlayerOne;
let finalRisPlayerTwo;
let sumPonePoints = 0;
let sumPtwoPoints = 0;


for(i=0; i < strikesNumber; i++){
    playerOne = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    risPlayerOne.push(playerOne)

    playerTwo = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    risPlayerTwo.push(playerTwo)
}
 
console.log(`Risultato tiri player ONE: ${risPlayerOne}`);

for(n=0; n < risPlayerOne.length; n++) {
    sumPonePoints += risPlayerOne[n]
}

console.log(`Risultato tiri player TWO: ${risPlayerTwo}`);

for(n=0; n < risPlayerTwo.length; n++) {
    sumPtwoPoints += risPlayerTwo[n]
}


console.log(`Totale punteggio giocatore UNO: ${sumPonePoints}`);
console.log(`Totale punteggio giocatore DUE: ${sumPtwoPoints}`);

if(sumPonePoints > sumPtwoPoints) {
    console.log("Vince la partita il Giocatore UNO!");
}else if(sumPonePoints < sumPtwoPoints){
    console.log("Vince la partita il Giocatore DUE!")
}else {
    console.log(`I giocatori hanno prareggato con un punteggio di: ${sumPonePoints}`)
}
