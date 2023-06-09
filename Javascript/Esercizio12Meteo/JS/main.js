//VARIABLES
const dataNumerica = document.querySelector('#dataNumerica');
let orario = document.querySelector('#orario')
let campoLocalita = document.querySelector('#localita');
let campoGradi = document.querySelector('#gradi');
let CampoIcona = document.querySelector('#icona');
const datiCitta = document.querySelector('#datiCitta');
datiCitta.classList.add('d-none')
const btn = document.querySelector('#button-addon2')
const userInput = document.querySelector(`#userInput`);
let parUno = document.createElement('p');
let parDue = document.createElement('p');
let myIcon = document.createElement('img');
let span = document.createElement('span');
const spinner = document.querySelector('#spinner');
const mainContainer = document.querySelector('#principale')
mainContainer.classList.add('d-none');
const spinnerDue = document.querySelector('#spinner2')
spinnerDue.classList.add('d-none')
const cittaCorrente = document.querySelector('#cittaCorrente');
const form = document.querySelector('form');


//FUNCTIONS
function getData() {
    let giorniDellaSettimana = [`Dom`, `Lun'`, `Mar`, `Mer`, `Gio`, `Ven`, `Sab`];
    let mesi = [`Gen`,`Feb`, `Mar`, `Apr`, `Mag`, `Giu`, `Lug`, `Ago`, `Set`, `Ott`, `Nov`, `Dic`]
    //parte bassa della data
    const today = new Date();
    let anno = today.getFullYear().toString()
    let annoPost = anno.slice(2,4)
    let mese = today.getMonth() + 1;
    let giorno = today.getDate()
    let  miaDataNumerica = `<i class="fa-regular fa-calendar-days me-2" style="color: #ffffff;"></i> ${giorno}/${mese}/${annoPost}`
    //parte alta della data
    let giornoText = giorniDellaSettimana[today.getDay()]
    let meseText = mesi[today.getMonth()]
    let annoPre = anno.slice(0,2)
    let miaDataTestuale = `${giornoText} ${meseText} ${annoPre}`
    //appendiamo il primo formato
    let pOne = document.createElement('p');
    pOne.style.letterSpacing = "3px";
    pOne.innerHTML = miaDataTestuale;
    dataNumerica.appendChild(pOne)
    //appendiamo il secondo formato
    let pTwo = document.createElement('p');
    pTwo.style.letterSpacing = "10px"
    pTwo.innerHTML = miaDataNumerica;
    dataNumerica.appendChild(pTwo);
    //ORARIO
    let ore = today.getHours();
    let min = today.getMinutes();
    let secs = today.getSeconds();
    let myHours = `${ore}:${min}:${secs}`;
    let myOrario = document.createElement('p')
    myOrario.innerHTML = `<i class="fa-regular fa-clock me-2" style="color: #ffffff;"></i>${myHours}`;
    orario.appendChild(myOrario)
    spinner.classList.add('d-none');
    mainContainer.classList.remove('d-none')
}

//fetch dati meteo
async function getMeteoData() {
    let url = `http://api.weatherapi.com/v1/current.json?key=1ac72807410b43168f9164537230806&q=`;
    url += (userInput.value)

    try {
        const response = await fetch(url);
        const results = await response.json()
        datiCitta.classList.remove('d-none')
        pushMyData(results)
    } catch (error) {
        console.log(error)
        datiCitta.innerHTML = `<h1 class="text-center display-1 text-white">Località non trovata!</h1>`
    }
} 

//fetc current location data
async function currentLocationData(lat, long) {
    let secondUrl = `http://api.weatherapi.com/v1/current.json?key=1ac72807410b43168f9164537230806&q=${lat},${long}`;

    try {
        const response2 = await fetch(secondUrl);
        const data = await response2.json();
        getcurrentLocationData(data)
    } catch (error) {
        console.log(error)
    }
}

//funziona per push dei dati all'interno dell'HTML
function pushMyData(obj) {
    let localita = obj.location.name;
    let gradi = obj.current.temp_c;
    let icona = obj.current.condition.icon;
    let conditionText = obj.current.condition.text;
    
    //creo il campo per la località
    parUno.classList.add('display-2', `text-white`)
    parUno.style.textShadow = "0px 0px 5px black"
    parUno.innerHTML = localita;
    campoLocalita.appendChild(parUno)
    
    //creo il campo per i gradi
    parDue.classList.add('display-2', `text-white`)
    parDue.style.textShadow = "0px 0px 5px black"
    parDue.innerHTML = `${gradi}°C`;
    campoGradi.appendChild(parDue)
    
    //creo l'elemento icona
    myIcon.classList.add('img-fluid')
    myIcon.src = icona;
    CampoIcona.appendChild(myIcon)
    span.classList.add('text-white')
    span.innerHTML = conditionText;
    CampoIcona.appendChild(span)
    //puliamo l'input dell'utente
    userInput.value = "";
}

//citta e meteo locali
function getcurrentLocationData(obj) {
    cittaCorrente.innerHTML = `${obj.location.name} ${obj.current.temp_c}°<img src="${obj.current.condition.icon}">`
}

//geolicalizzazione
navigator.geolocation.getCurrentPosition((position) => {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    currentLocationData(lat, long)
});

//prevengo il comportamento del bottone FORM e al submit faccio focus sul bottone stesso.
form.addEventListener('submit', (e)=>{
    e.preventDefault()
    datiCitta.classList.add('d-none')
    spinnerDue.classList.remove('d-none')
    setTimeout(() => {
        spinnerDue.classList.add('d-none')
        getMeteoData()
    }, 1000);
})

//INVOCATIONS
setInterval(() => {
    dataNumerica.innerHTML = "";
    orario.innerHTML = "";
    getData()
}, 1000);
