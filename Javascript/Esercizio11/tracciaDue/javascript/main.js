//VARIABLES
const searchButton = document.querySelector(`#searchButton`);
const barraRicerca = document.querySelector(`#barraRicerca`);
const riga = document.querySelector('#riga');
const spinner = document.querySelector('#spinner');
let url = `https://pokeapi.co/api/v2/`;
barraRicerca.classList.add('d-none');


//FUNCTIONS
//fetch principale
async function getPokemonMain() {
    url += `pokemon?limit=150&offset=0`
    
    try {
        const response = await fetch(url);
        const mainObject = await response.json();
        // console.log(mainObject) //DA ELIMINARE
        spinner.classList.toggle('d-none')
        createCards(riga, mainObject)

        

    } catch (error) {
        console.log(error)
    }
}

//creazione card complete
function createCards(target, obj) {
        url += `pokemon?limit=150&offset=0`
        obj.results.forEach(singleMain => {
            fetch(singleMain.url)
            .then((res) => res.json())
            .then((singlePokemon) => {
                spinner.classList.add('d-none');
                let col = document.createElement('div');
                col.classList.add('col-12', 'col-sm-6', 'col-lg-3', 'col-xl-2', 'my-cursor')
                let card = `
                <div class="card shadow-lg p-3 mb-4">
                    <div class="my-card-bg" style="background-image: url('${singlePokemon.sprites.other.dream_world.front_default}')"></div>
                    <img src="${singlePokemon.sprites.other.dream_world.front_default}" class="card-img-top d-none" alt="...">
                    <div class="card-body">
                        <p class="card-text text-center text-capitalize"><strong>${singlePokemon.species.name}</strong></p>
                    </div>
                </div>
                `;
                col.innerHTML = card
                target.appendChild(col);
                col.addEventListener('click', ()=> {
                    const result = singlePokemon.species.name;
                    window.open(`./standard.html?name=${result}`)
                })
            })
        });
}

//genera cards by name
async function createCardsByName(target, pokemon) {
    url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    try {
        const response2 = await fetch(url);
        const obj2 = await response2.json();
        spinner.classList.add('d-none');
        let col = document.createElement('div');
                col.classList.add('col-12', 'col-8', 'm-auto', 'my-cursor')
                let card = `
                <div class="card shadow-lg p-3 mb-4">
                    <div class="my-card-bg" style="background-image: url('${obj2.sprites.other.dream_world.front_default}')"></div>
                    <img src="${obj2.sprites.other.dream_world.front_default}" class="card-img-top d-none" alt="...">
                    <div class="card-body">
                        <p class="card-text text-center text-capitalize"><strong>${obj2.species.name}</strong></p>
                    </div>
                </div>
                `;
                col.innerHTML = card
                target.appendChild(col);
                col.addEventListener('click', ()=> {
                    const result = obj2.species.name;
                    window.open(`./standard.html?name=${result}`)
                })
        
    } catch (error) {
        console.log(error)
    }

}

//EXECUTES
searchButton.addEventListener('click', ()=>{
    barraRicerca.classList.toggle('d-none')
    barraRicerca.focus()
    
})


barraRicerca.addEventListener('change', ()=>{
    if(barraRicerca.value.length === 0) {
        spinner.classList.remove('d-none')
        riga.innerHTML = ""
        url = `https://pokeapi.co/api/v2/pokemon?limit=150&offset=0`;
        getPokemonMain(url);
    }else {
        spinner.classList.remove('d-none')
        riga.innerHTML = "";
        createCardsByName(riga, barraRicerca.value.toLowerCase())
    }
})

getPokemonMain(url)