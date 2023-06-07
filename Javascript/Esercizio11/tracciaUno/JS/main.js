//VARIABLES---------------------------------------------------------------------------------
const inputUser = document.querySelector('#userInput');
const form = document.querySelector('form');
const userInput = document.querySelector('#userInput')
const col = document.querySelector('#col')
const preSearch = document.querySelector('#pre-search')
const initialPar = document.querySelector('#initial-par')
const spinner = document.querySelector('#spinner');
spinner.classList.add('d-none')

//DECLARATIONS------------------------------------------------------------------------------
//restituzione film cercato
async function getFilmList() {
    let url = `http://www.omdbapi.com/?apikey=2ce3f74b&`;
    //variabile di appoggio che contiene la value inserita dall'utente
    const userSearched = userInput.value;
    //facciamo replace di tutti gli spazi sostituendoli con il segno +
    const wordForSearch = userSearched.replace(/[^A-Z0-9]+/ig, "+");
    //concateniamo alla url la query e gli passiamo il titolo del film cercato dall'utente
    url += `&t=${wordForSearch}`

    try {
        const response = await fetch(url);
        const film = await response.json()
        console.log(film)
        //invochiamo la funzione per creare la card e come parametri gli passiamo il col e la response parsata JSON
        createFilmCard(col, film)
        //nascondiamo lo spinner
        spinner.classList.toggle('d-none')
    } catch (error) {
        //gestiamo l'errore
        console.log(error)
        //notifichiamo all'utente l'errore
        col.innerHTML = `<h2 class="text-center text-danger">Film non trovato!</h2> 
                        <a href="./index.html" class="btn btn-dark mt-5 position-relative start-50 translate-middle-x" style="width: 10rem">Cerca ancora...</a>
                        `
    }
}

//crea card
function createFilmCard(target, film) {
    let card = `
    <div class="card back-trasp shadow-lg text-white rounded-3 mt-4">
        <div class="row">
            <div class="col-12 col-md-6 d-flex">
                <img src="${checkImage(film.Poster)}" class="img-fluid rounded-start-3">
            </div>
            <div class="col-md-6 p-5">
                <h2>${film.Title}</h2>
                <div class="d-flex flex-wrap gap-1">
                    <p><strong>${film.Year}</strong></p>
                    <p><strong>Genere:</strong> ${film.Genre}</p>
                    <p class="bg-primary text-white rounded-1 px-1">${film.Country}</p>
                    <p><strong>Rated:</strong> ${film.Rated}</p>
                    <p><strong>Rilasciato il:</strong> ${film.Released}</p>
                    <p><strong>Durata: </strong>${film.Runtime}</p>
                    <p><strong>Attori: </strong>${film.Writer}</p>
                </div>
                <p>
                    ${film.Plot}
                </p>
                <div class="col-12 d-flex flex-column">
                    <h6>Valutazioni:</h6>
                    <ul>
                        ${generateValues(film.Ratings)}
                    </ul>
                </div>
            </div>
        </div>
        <p class="bg-warning p-1 position-absolute top-0 end-0 rounded-end-3">${film.Language}</p>
    </div>
        <a href="./index.html" class="btn btn-dark mt-5 position-relative start-50 translate-middle-x" style="width: 10rem">Cerca ancora...</a>
    `
    target.innerHTML = card;
}

//genera valutazioni del film come li da appendere ad una lista non ordinata
function generateValues (values) {
    let string = ``;
    values.forEach(value => {
        string += `<li>${value.Source}: ${value.Value}</li>`;
    })
    return string;
}

//funzione di controllo presenza immagine
function checkImage(img) {
    // Poster: "N/A"
    let photo = ``;
    if(img !== "N/A") {
        photo = img
    }else {
        photo = `https://placehold.co/600x400?text=image+not+present`;
    }
    console.log(photo)
    return photo;
}

//evento di ascolto su tasto cerca
form.addEventListener('submit', (e) => {
    spinner.classList.toggle('d-none');
    preSearch.classList.add('d-none');
    initialPar.classList.add('d-none');
    e.preventDefault();
    getFilmList()
} )