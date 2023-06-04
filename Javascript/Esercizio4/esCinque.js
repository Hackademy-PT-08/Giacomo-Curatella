//dichiariamo la funzione
function fantaCalcioGame(vote, goals, assists, autogol, ammonitions, expulsions) {
    //dichiariamo un contatore per tenere traccia del punteggio che ha di base il valore di vote(comunque andrebbe sommato, lo facciamo subito)
    let totalScore = vote;
    //3 punti a goal segnato quindi moltiplichiamolo per il numero inserito
    totalScore += (goals * 3);
    //aggiungiamo 1 punto per ogni assist, quindi lo sommiamo al contatore
    totalScore += assists;
    //sottraiamo 2 punti per ogni auto-goal
    totalScore -= (autogol * 2);
    //se ammonitions == true sottraiamo ulteriori 0.5 punti
    if(ammonitions){
        totalScore -= 0.5;
    }
    //se expulsions == true sottraiamo 1 punto
    if(expulsions){
        totalScore -= expulsions;
    }
    //ritorniamo il valore del contatore aggiornato all'esterno della funzione
    return `Giacomo Curatella ha totalizzato ${totalScore} punti, che campione!`;
}
//salviamo il risultato della funzione nella variabile resutl
let result = fantaCalcioGame(8, 2, 1, 0, true, false);
//stampiamo i punti totalizzati dal giocatore in console
console.log(result)

