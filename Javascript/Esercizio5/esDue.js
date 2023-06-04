//dichiaro l'array
const myArray = ["Pippo", "Topolino", "paperino"];
let element = "topolino";

//inizializzo la funzione
function searchElementInArray(list, key) {
    for(let i = 0; i < list.length; i++) {
        if(list[i].toLowerCase() === key.toLowerCase()) {
            return `Prodotto trovato`;
        };

        return `Prodotto NON trovato!`
    }
}
//stampiamo in console il risultato della funzione!
console.log(searchElementInArray(myArray, element))
