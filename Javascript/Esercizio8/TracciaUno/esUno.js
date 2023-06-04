const marca = document.querySelector('#marca');
const modello = document.querySelector('#modello');
const anno = document.querySelector('#anno');
const contInterno = document.querySelector('#contInterno');
const listaAuto = document.querySelector('#lista');
const btn = document.querySelector('button');
const garageTitle = document.createElement('h2');
garageTitle.classList.add("text-center")
garageTitle.innerHTML = "Veicoli nel garage";
document.body.appendChild(garageTitle)

//inizializzo il costruttore del garage
class Garage {
    constructor(name, maxSlots, vehicles) {
        this.name = name;
        this.maxSlots = maxSlots;
        this.vehicles = [];
    }
}

//creo il garage
const myGarage = new Garage ("Giacur's Garage",10);
console.log(myGarage)

//inizializzo il costruttore dell'auto
class Auto {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year
    }
}

//inizializzo la funzione che aggiunge l'auto nel garage
function pushCarInGarage(brand, model, year) {
    const boxes = myGarage.vehicles;
    const newCar = new Auto(brand, model, year);
    boxes.push(newCar);
}

//inizializzo la funzione al click del bottone
btn.addEventListener('click' , ()=>{
    //gestisco l'errore nel caso il garage sia pieno
    if(myGarage.vehicles.length === myGarage.maxSlots) {
        btn.classList.add("d-none");
        marca.disabled = true;
        modello.disabled = true;
        anno.disabled = true;
        const avviso = document.createElement('p');
        avviso.innerHTML = "Numero massimo di auto raggiunto!";
        avviso.classList.add("text-danger", "fs-1", "mt-3");
        contInterno.appendChild(avviso);
        return;
    }
    //altrimenti pushamo la macchina nel garage e ne stampiamo i dati nell'HTML
    pushCarInGarage(marca.value, modello.value, anno.value);
    let myKey = myGarage.vehicles
    const p = document.createElement('p');
    let i = 1;
    myKey.forEach(auto=> {
        p.innerHTML = `${i} - ${auto.brand} ${auto.model} del ${auto.year}`;
        p.classList.add("text-center", "shadow", "text-success", "fs-3", "text-capitalize")
        document.body.appendChild(p)
        i++
    })
    marca.value = "";
    modello.value = "";
    anno.value = "";
})





    
