// Definisci un oggetto che rappresenti una sala da bowling, dovrà contenere un’array di giocatori che saranno formati dalle proprietà, nome e punteggi.
// Creare una funzione che calcoli il totale di ogni giocatore e estragga il vincitore della partita.

const bowling = {
    players: [
        {   name: "Giocatore 1", 
            scores: [10, 7, 9, 7, 6, 10, 10, 9, 10, 8, 7, 10, 10, 10, 9, 8, 10],
        },
        {   
            name: "Giocatore 2", 
            scores: [9, 8, 10, 10, 7, 10, 10, 10, 9, 10, 8, 7, 10, 10, 10, 9, 10] 
        },
        { 
            name: "Giocatore 3", 
            scores: [10, 10, 7, 8, 10, 7, 9, 8, 10, 10, 10, 9, 8, 10, 10, 10, 7] 
        }
    ]
  };
  // Expected output: Il Vincitore è il Giocatore 2 con 157 punti totali

//inizializzo la funzione per calcolare i punteggi
function playerTotals(bowling) {
    //dichiaro players seleziono l'array dentro bowling
    let players = bowling.players;
    players.forEach(player => {
        let punti = player.scores;
        let counter = 0;
        punti.forEach(punto => {
            counter += parseInt(punto)
        })
        console.log(counter);
        player.total = counter;
    });
    //console.log(players) //da eliminare
}


//inizializzo la fuzione per individuare il vincitore
function checkWinner(bowling) {
    let players = bowling.players;
    let myTotal = players.map(player => player.total);
    let maxScore = Math.max(...myTotal)
    console.log(maxScore)
    players.forEach(giocatore => {
        if(giocatore.total === maxScore) {
            console.log(`Nome: ${giocatore.name}, scores: ${giocatore.scores}, total: ${giocatore.total}`)
        }
    })
}

//invoco la funzione e gli passo come parametro l'oggetto
playerTotals(bowling)
checkWinner(bowling)





