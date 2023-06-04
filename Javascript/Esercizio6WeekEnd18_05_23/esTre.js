let myGarage = {
    parcoMacchine: [
        {
            marca: "Renault",
            modello: "Twingo"
        },
        {
            marca: "Ford",
            modello: "Focus"
        },
        {
            marca: "Fiat",
            modello: 500
        },
        {
            marca: "Audi",
            modello: "A4"
        },
        {
            marca: "BMW",
            modello: "Serie_3"
        },
        {
            marca: "Porsche",
            modello: "Cayenne"
        }
    ],
    getCarInfo: function() {
        this.parcoMacchine.forEach(macchina => {
            //“Renault - Twingo”
            console.log(`"${macchina.marca} - ${macchina.modello}"`);
        })
    }
}

myGarage.getCarInfo()


//creo la funzione che stampi tutti i modelli presenti nel garage
let showModels = (garage) => {
    console.log("I modelli di auto presenti nel garage sono:\n");
    garage.forEach(car => {
        console.log(`-${car.modello}`);
    })
}

//invochiamo la funzione e gli passiamo come parametro il garage
showModels(myGarage.parcoMacchine)





