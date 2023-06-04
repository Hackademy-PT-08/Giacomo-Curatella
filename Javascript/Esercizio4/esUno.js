//creiamo la funzione che ha come parametro in ingresso num
function checkNumber(num) {
    if(isNaN(num)){
        //controllo se il tipo di dato inserito dall'utente è corretto altrimenti temino il programma
        return "Devi inserire un numero!";
    }
    let answer;   
    if(num > 0) {
        //controlliamo se il numero è positivo
        answer = "Il numero inserito è POSITIVO!";
    }else if(num < 0) {
        //controlliamo se il numero è negativo
        answer = "Il numero inserito è NEGATIVO!"
    }else {
        //in tutti gli altri casi sarà uguale a 0!
        answer = "Il numero inserito è UGUALE a 0(zero)!";
    }
    //portiamo il dato fuori dalla funzione
    return answer;
}

//dichiariamo la variabile check che avrà al suo interno il valore esportato dalla funzione
let check = checkNumber(0);
//stampiamo a schermo il risultato
console.log(check);