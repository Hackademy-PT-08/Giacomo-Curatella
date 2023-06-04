//dichiariamo la variabile che contiene la stringa
let myString = 'Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri';

//creo la funzione per convertire la stringa in array
function checkStringLength(stringa) {
    //creo una array in cui immagazzino la stringa utilizzando come separatori + e -
    const stringToArray = stringa.split("+");
    //ritorno il valore fuori dalla funzione
    return stringToArray;
}
//salvo l'array finale nella variabile finalArray
const finalArray = checkStringLength(myString);

//creo una funzione per conoscere la lunghezza dell'array
function checkArrayLength(arrayFinale) {
    //controlliamo quanto è lunga l'array
    return arrayFinale.length;
}
//memorizzo la lunghezza dell'array in una variabile
arrayLength = checkArrayLength(finalArray);
//stampo il contentuto della variabile arrayLength
console.log(arrayLength)

//creo la funzione per estrapolare l'ultimo lemento dall'array
function getLastItem(arrayFinaleNew) {
    //ritorniamo l'ultimo elemento dell'array
    return arrayFinaleNew.slice(-1);
}

let lastItem = getLastItem(finalArray);
console.log(lastItem)






