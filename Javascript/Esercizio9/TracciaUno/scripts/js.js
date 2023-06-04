//variabili
const menu = document.querySelector('#menu');
const riga = document.querySelector("#riga");
const form = document.querySelector("form");

//funzioni
//creazione menu
function generateMenuItems(target, object) {
    object.forEach(item => {
        //creiamo l'elemento LI
        let li = document.createElement('li');
        li.classList.add("nav-item");
        //creiamo l'elemento A
        let anchor = document.createElement(`a`);
        anchor.classList.add(`nav-link`);
        //popoliamo i dati degli elementi
        anchor.innerHTML = item.name
        anchor.setAttribute(`href`, item.url)
        //appendiamo gli elementi
        target.appendChild(li);
        li.appendChild(anchor)
       //controlliamo se ha la sotto-categoria
        if(item.subcategories.length > 0) {
            //aggiungiamo la classe a "li"
            li.classList.add("dropdown");
            //creiamo l'elemento bottone e diamogli le classi
            let anchorDrop = document.createElement(`a`);
            anchorDrop.classList.add("nav-link", "dropdown-toggle");
            anchorDrop.setAttribute("data-bs-toggle", "dropdown");
            anchorDrop.setAttribute("href", "#");
            anchorDrop.setAttribute("role", "button");
            anchorDrop.setAttribute("aria-haspopup", "true");
            anchorDrop.setAttribute("aria-expanded", "false");
            target.appendChild(anchorDrop);
            //creiamo il div del dropdown
            let dropDiv = document.createElement("div");
            dropDiv.classList.add("dropdown-menu");
            li.appendChild(dropDiv)
            
            categories.forEach(category => {
                //creiamo l'inner anchor
                let innerAnchor = document.createElement('a');
                innerAnchor.classList.add("dropdown-item");
                innerAnchor.innerHTML = category.name;
                innerAnchor.setAttribute("href", category.url);
                dropDiv.appendChild(innerAnchor)
            })
       }
    });
}
// creazione cards
function createCards(target, object) {
    object.forEach(article => {
        //creiamo la col
        let col = document.createElement('div');
        col.classList.add("col-md-4");
        target.appendChild(col);
        //creiamo il div della card
        let cardDiv = document.createElement("div");
        cardDiv.classList.add("card");
        //creiamo la card
        let card = `
        <div class="card-body py-4">
        <div class="my-bg mb-3" style="background-image: url(${article.img})"></div>
        <h4 class="card-title mb-3">${article.title}</h4>
        <h6 class="card-subtitle mb-2 text-muted">${article.subTitle}</h6>
        <p class="card-text mb-3">${article.text}</p>
        ${tagsGenerator(article.links)}
        </div>
        `;
        col.innerHTML = card
        col.appendChild(cardDiv);
    })
}
//generatore tags
function tagsGenerator(items) {
    let string = ``;
    items.forEach(tag => {
        // string = `<a href="${tag.url}" class="card-link text-decoration-none">${tag.name}</a>`
        switch(tag.name) {
            case "Attualità":
                string += `<a href="${tag.url}" class="card-link text-decoration-none bg-success rounded-5 p-1 me-1">${tag.name}</a>`;
                break;
            case "Politica":
                string += `<a href="${tag.url}" class="card-link text-decoration-none bg-primary rounded-5 p-1 me-1">${tag.name}</a>`;
                break;
            case "Disastri":
                string += `<a href="${tag.url}" class="card-link text-decoration-none bg-secondary text-black rounded-5 p-1 me-1">${tag.name}</a>`;
                break;
            case "Cronaca":
                string += `<a href="${tag.url}" class="card-link text-decoration-none bg-warning text-black rounded-5 p-1 me-1">${tag.name}</a>`;
                break;
            default:
                string += `Niente da visualizzare`;
        }
    })
    return string;
}
//controllo del form
form.addEventListener('submit', (e) => {
    //creiamo un nuovo modale e passiamo l'id dell'elemento HTML
    const myModal = new bootstrap.Modal(document.getElementById('myModal'));
    //preveniamo il comportamento di default del bottone del form on submit
    e.preventDefault();
    //inizializziamo la variabile che conterrà il pacchetto da inviare al server
    let packet = {};
    //popoliamo gli attributi degli oggetti con i value dei campi compilati dall'utente
    packet.name = document.querySelector(`#nome`).value;
    packet.surname = document.querySelector(`#cognome`).value;
    packet.mail = document.querySelector(`#mail`).value;
    packet.message = document.querySelector(`#messaggio`).value;
    packet.privacy = document.querySelector(`#privacy`).value;
    //solo on success mostriamo la modal
    myModal.show();
    //svuotiamo i campi del form
    document.querySelector(`#nome`).value = "";
    document.querySelector(`#cognome`).value = "";
    document.querySelector(`#mail`).value = "";
    document.querySelector(`#messaggio`).value = "";
    document.querySelector(`#privacy`).checked = false;
    //stampiamo in console il pacchetto pronto per essere inviato!
    console.log(packet);
})

//functions exectute
//genera menu
generateMenuItems(menu, menuItems)

//genera cards
createCards(riga, articles)








