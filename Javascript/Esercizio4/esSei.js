//inizializziamo la funzione
function chase(strikes) {
        //creiamo dei contatori per i vari punteggi
        let playerOne;
        let playerTwo;
        let risPlayerOne = [];
        let risPlayerTwo = [];
        let sumPonePoints = 0;
        let sumPtwoPoints = 0;

        //ogni giocatore per ogni tiro che può fare genererà un numero casuale da 1 a 6
        for(i=0; i < strikes; i++){
            playerOne = Math.floor(Math.random() * (6 - 1 + 1) + 1);
            //pushamo il risultato del pOne in un array
            risPlayerOne.push(playerOne)

            playerTwo = Math.floor(Math.random() * (6 - 1 + 1) + 1);
            //pushamo il risultato del pTwo in un array
            risPlayerTwo.push(playerTwo)
        }
        //vediamo cosa è uscito da ogni tiro del playerOne
        console.log(`Risultato tiri player ONE: ${risPlayerOne}`);
        //per ogni tiro che ha fatto il valore verrà sommato al suo cassetto totale punti
        for(n=0; n < risPlayerOne.length; n++) {
            sumPonePoints += risPlayerOne[n]
        }
        //vediamo cosa è uscito da ogni tiro del playerTwo
        console.log(`Risultato tiri player TWO: ${risPlayerTwo}`);
        //per ogni tiro che ha fatto il valore verrà sommato al suo cassetto totale punti
        for(n=0; n < risPlayerTwo.length; n++) {
            sumPtwoPoints += risPlayerTwo[n]
        }

        //stampiamo i punteggi totalizzati dai giocatori sommando i numeri degli array di ognuno
        console.log(`Totale punteggio giocatore UNO: ${sumPonePoints}`);
        console.log(`Totale punteggio giocatore DUE: ${sumPtwoPoints}`);

        //controlliamo chi ha vinto
        if(sumPonePoints > sumPtwoPoints) {
            console.log("Vince la partita il Giocatore UNO!");
        }else if(sumPonePoints < sumPtwoPoints){
            console.log("Vince la partita il Giocatore DUE!")
        }else {
            console.log(`I giocatori hanno prareggato con un punteggio di: ${sumPonePoints}`)
        }

    }

chase(5);