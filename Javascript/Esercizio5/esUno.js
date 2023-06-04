//simuliamo l'input da parte dell'utente quindi ci passa il dato come stringa
let inputOne = "3,7,2,5,8";
let inputTwo = "9,3,1,4,7";
//convertiamo le stringe in arrya, utilizzando il separatore ","
const arrUno = inputOne.split(",");
const arrTwo = inputTwo.split(",");
//inizializzo la funzione
function myCalc(arrayOne, arrayTwo, operator) {
    //creo l'array per l'output C
    let arrayRis = [];
    //sfogliamo le array con il ciclo for e l'operazione che vorrà fare l'utente la gestiamo con switch
    for(let i=0; i<arrayOne.length; i++) {
        switch(operator) {
            //addizione
            case "+":
                arrayRis.push(parseInt(arrayOne[i]) + parseInt(arrayTwo[i]));
                break;
            //sottrazione
            case "-":
                arrayRis.push(parseInt(arrayOne[i]) - parseInt(arrayTwo[i]));
                break;
            //moltiplicazione
            case "*":
                arrayRis.push(parseInt(arrayOne[i]) * parseInt(arrayTwo[i]));
                break;
            //divisione
            case "/":
                arrayRis.push((parseInt(arrayOne[i]) / parseInt(arrayTwo[i])).toFixed(2));
                break;
            default:
                return `Spiacente ma l'operazione da te richiesta non è disponibile!`;
        }
    }
    //torniamo il dato dell'array(outputC) fuori dalla funzione
    return arrayRis;
}
//stampo il risultato in console
console.log(myCalc(arrUno, arrTwo, "*"))
