//VARIABILI
const caroselloInner = document.querySelector('#carosello-inner');
const rigaCards = document.querySelector('#riga');
const dropMenu = document.querySelector('#drop-menu');
const mySelect = document.querySelector('#my-select');

//FETHCES
myFetch("./JSON/carouselPhotos.json", populateMyCarousel, caroselloInner);
myFetch("https://dummyjson.com/products", createCards, rigaCards);
myFetch("https://dummyjson.com/products/categories", populateMyNav, dropMenu);
myFetch("https://dummyjson.com/products/categories", filterBySelect, mySelect);

//funzione per fetch
function myFetch(url, funzione, target) {
    fetch(url)
    .then(res => res.json())
    .then(products => {
        funzione(target, products);
    })
}

// FUNCTIONS
//carosello function
function populateMyCarousel(target, oggetto) {
    oggetto.forEach(photo => {
        // creo il wrapper
        let firstDiv = document.createElement('div');
        firstDiv.classList.add("carousel-item");
        //se è la prima foto allara gli aggiungiamo la classe
        if(photo.id === 1) {
            firstDiv.classList.add('active');
        }
        //altrimenti andiamo avanti e appendiamo l'elemento
        target.appendChild(firstDiv);
        //creo l'immagine
        let image = document.createElement('img');
        image.classList.add('d-block', 'w-100');
        image.setAttribute('src', photo.url);
        firstDiv.appendChild(image);
        //credo il secondo DIV
        let secondDiv = document.createElement('div');
        secondDiv.classList.add('carousel-caption', 'd-none', 'd-md-block', 'dark-velina', 'rounded-3');
        firstDiv.appendChild(secondDiv);
        //creaiamo il titolo della foto
        let titolo = document.createElement('h5');
        titolo.innerHTML = photo.title;;
        secondDiv.appendChild(titolo);
        //creiamo la descrizione della foto
        let descrizione = document.createElement('p');
        descrizione.innerHTML = photo.description;
        secondDiv.appendChild(descrizione);
    });
}

//create cards function
function createCards(target, oggetto) {
    oggetto.products.forEach(prodotto => {
        //creiamo la col
        let col = document.createElement('div');
        col.classList.add('col-12', `col-sm-6`, 'col-lg-4', 'col-xxl-3', 'mb-5');
        target.appendChild(col);
        //dichiariamo la card
        let card = `
                    <div class="card border-0 rounded-2 p-3 d-flex flex-column">
                        <div class="my-bg-card rounded-2 position-relative" style="background-image: url(${prodotto.images[0]})">
                            ${checkMyColor(prodotto.category)}
                        </div>
                        <img src="${prodotto.images[0]}" class="card-img-top d-none" alt="${prodotto.description}">
                        <div class="card-body">
                            <div class="row justify-content-between">
                                <div class="col-8 d-flex justify-content-start"> 
                                    <h5 class="card-title">${prodotto.brand} ${prodotto.title}</h5>
                                </div>

                                <div class="col-4 d-flex justify-content-end"> 
                                    <h6 style="font-size: 0.8rem">Rating ${prodotto.rating} <i class="fa-solid fa-star" style="color: #e5a50a;"></i></h6>
                                </div>
                            </div>
                            <p class="card-text mt-4 py-4" style="font-size: 0.9rem">${prodotto.description}</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item border-0">Disponibili: ${prodotto.stock} pezzi</li>
                            <li class="list-group-item border-0 text-danger">Sconto del ${prodotto.discountPercentage}%</li>
                            <li class="list-group-item text-success">Prezzo ${(prodotto.price).toFixed(2)}€</li>
                        </ul>
                        <button class="btn btn-primary mt-4" style="width: 50%; margin: 0 auto; font-size: 0.9rem">Aggiungi al carrello <i class="fa-solid fa-cart-arrow-down" style="color: #ffffff;"></i></button>
                        
                    </div>
                    `;
        //creiamo in div della card
        let contCard = document.createElement('div');
        contCard.classList.add('card');
        //popoliamo la card con i dati
        contCard.innerHTML = card;
        col.appendChild(contCard);
    })
}

//controllo categoria oggetto per colore etichetta
function checkMyColor(categoria) {
    let string = ``;
    switch(categoria) {
        //smartphones
        //laptop
        //fragrances
        //skincare
        //groceries
        //home-decoration
        case("smartphones"):
            string = `<a href="#" class="card-link text-decoration-none bg-warning p-2 rounded-2 text-white text-capitalize position-absolute end-0">${categoria}</a>`;
            break;
        case("laptops"):
            string = `<a href="#" class="card-link text-decoration-none bg-primary p-2 rounded-2 text-white text-capitalize position-absolute end-0">${categoria}</a>`;
            break;
        case("fragrances"):
            string = `<a href="#" class="card-link text-decoration-none bg-danger p-2 rounded-2 text-white text-capitalize position-absolute end-0">${categoria}</a>`;
            break;
        case("skincare"):
            string = `<a href="#" class="card-link text-decoration-none bg-success p-2 rounded-2 text-white text-capitalize position-absolute end-0">${categoria}</a>`;
            break;
        case("groceries"):
            string = `<a href="#" class="card-link text-decoration-none bg-info p-2 rounded-2 text-white text-capitalize position-absolute end-0">${categoria}</a>`;
            break;
        case("home-decoration"):
            string = `<a href="#" class="card-link text-decoration-none bg-dark p-2 rounded-2 text-white text-capitalize position-absolute end-0">${categoria}</a>`;
            break;
        }
    return string
}

//funzione menu a tendina navbar
function populateMyNav(target, oggetto) {
    oggetto.forEach(categoria => {
        // creiamo LI
        let li = document.createElement('li');
        target.appendChild(li);
        //creiamo l'anchor
        let anchor = document.createElement('a');
        anchor.classList.add('dropdown-item');
        anchor.setAttribute('href', '#');
        anchor.innerHTML = categoria;
        li.appendChild(anchor);
    })
}

// funzione filtraggio su categoria
function filterBySelect(target, oggetto) {
    oggetto.forEach(categoria => {
        //creiamo option
        let option = document.createElement('option');
        option.setAttribute('value', categoria);
        option.innerHTML = categoria;
        target.appendChild(option);
    })
}

//generazione solo delle cards cercate
function createSearchedCards(target, singleObj) {
        singleObj.forEach(singleProd => {
            let col = document.createElement('div');
            col.classList.add('col-12', `col-sm-6`, 'col-lg-4', 'col-xxl-3', 'mb-5');
            target.appendChild(col);
            //dichiariamo la card
            let card = `
            <div class="card border-0 rounded-2 p-3 d-flex flex-column">
            <div class="my-bg-card rounded-2 position-relative" style="background-image: url(${singleProd.images[0]})">
                ${checkMyColor(singleProd.category)}
            </div>
            <img src="${singleProd.images[0]}" class="card-img-top d-none" alt="${singleProd.description}">
            <div class="card-body">
                <div class="row justify-content-between">
                    <div class="col-8 d-flex justify-content-start"> 
                        <h5 class="card-title">${singleProd.brand} ${singleProd.title}</h5>
                    </div>
                    <div class="col-4 d-flex justify-content-end"> 
                        <h6 style="font-size: 0.8rem">Rating ${singleProd.rating} <i class="fa-solid fa-star" style="color: #e5a50a;"></i></h6>
                    </div>
                </div>
                <p class="card-text mt-4 py-4" style="font-size: 0.9rem">${singleProd.description}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item border-0">Disponibili: ${singleProd.stock} pezzi</li>
                <li class="list-group-item border-0 text-danger">Sconto del ${singleProd.discountPercentage}%</li>
                <li class="list-group-item text-success">Prezzo ${(singleProd.price).toFixed(2)}€</li>
            </ul>
            <button class="btn btn-primary mt-4" style="width: 50%; margin: 0 auto; font-size: 0.9rem">Aggiungi al carrello <i class="fa-solid fa-cart-arrow-down" style="color: #ffffff;"></i></button>
            </div>
                        `;
            //creiamo in div della card
            let contCard = document.createElement('div');
            contCard.classList.add('card');
            //popoliamo la card con i dati
            contCard.innerHTML = card;
            col.appendChild(contCard);
        })
}

//funzione di allarme
function alarm() {
    let stringa = `<p class="text-center fs-1 mt-5 text-danger">Nessun prodotto trovato!</p>`
    return stringa;
}

//evento di ascolto sull'onchange della select
mySelect.addEventListener('change', ()=> {
    //creo una nuova fetch di prodotti per controllarne la categoria
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(oggetto => {
        if(mySelect.value === "") {
            //svuotiamo la riga delle cards
            rigaCards.innerHTML = "";
            //invochiamo la funzione per ripopolare la riga con tutte le cards
            createCards(rigaCards, oggetto);
        } else {
            //cicliamo i prodotti e controlliamo la categoria
            let searchedProducts = oggetto.products.filter(oggetto => oggetto.category === mySelect.value);
            //controlliamo se la ricerca ha prodotto dei risultati
            if(searchedProducts.length === 0) {
                //se non sono stati trovati prodotti restituiamo l'errore
                rigaCards.innerHTML = alarm();
            }else {
                //svuotiamo la riga delle cards
                rigaCards.innerHTML = "";
                //facciamo replace delle cards con SOLO quelle cercate
                createSearchedCards(rigaCards, searchedProducts);
            }
        }
    })
})