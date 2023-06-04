//dichiariamo la funzione con 2 parametri in ingresso
function calculateArea(radius, precision) {
    //salviamo la prima operazione da fare nella variabile ris
    let ris = Math.pow(radius, 2) * Math.PI;
    //arrotondiamo il risultato ottenuto e conserviamolo nella variabile FinalRis
    let FinalRis = ris.toFixed(precision);
    //componiamo la stringa da restituire all'utente
    let answer = `Larea del cerchio è: ${FinalRis} considerando che il suo raggio è: ${radius} ed arrotondando di ${precision} cifre decimali dopo la virgola!`; 
    //esportiamo il valore di answer all'esterno della funzione
    return answer;
}

//conserviamo nella variabile calc il risultato della funzione
let calc = calculateArea(12, 0);
let calcUno = calculateArea(6, 3);
//stampiamo il risultato in console
console.log(calc);
console.log(calcUno)
