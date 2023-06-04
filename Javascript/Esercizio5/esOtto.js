//dichiariamo la variabile che contiene la stringa
let myString = 'Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri';
const namesToAdd = "Federico, Patrizio";

//creo la funzione per convertire la stringa in array
function checkStringLength(stringa) {
    //creo una array in cui immagazzino la stringa utilizzando come separatori + e -
    const stringToArray = stringa.split("+");
    //ritorno il valore fuori dalla funzione
    return stringToArray;
}
//salvo l'array finale nella variabile finalArray
const finalArray = checkStringLength(myString);




//rimuovo l'ultimo elemento dall'array
function removeLastItem(element) {
    element.pop();
    return element
}

console.log(removeLastItem(finalArray))

//aggiungo 2 nomi alla fine dell'array
function addNamesAsLasts(nomi, myArray) {
    //creo un array di appoggio per convertire la stringa contenente i nomi
    const provvArray = nomi.split(",");
    //per ogni nome da aggiungere
    for(let i=0; i<provvArray.length; i++) {
        //aggiungi alla fine
        myArray.push(provvArray[i]);
    }
    return myArray;
}

console.log(addNamesAsLasts(namesToAdd, finalArray))

//aggiungo 2 nomi all'inizio dell'array
function addNamesAsFirst(nomi, myArray) {
    //creo un array di appoggio per convertire la stringa contenente i nomi
    const provvArray = nomi.split(",");
    //per ogni nome da aggiungere
    for(let i=0; i<provvArray.length; i++) {
        //aggiungi all'inizio
        myArray.unshift(provvArray[i]);
    }
    return myArray;
}

console.log(addNamesAsFirst(namesToAdd, finalArray))