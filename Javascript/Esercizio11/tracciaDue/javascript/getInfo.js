//VARIABLES
let url = new URL(window.location.href);
const urlParams = new URLSearchParams(url.search);
const nome = urlParams.get('name');
const img = document.querySelector('#img');
const nomePokemon = document.querySelector('#nomePokemon')
const listaUno = document.querySelector(`#listaUno`)
const row = document.querySelector('#riga');



//FUNCTIONS

//fetch single pokemon
async function singlePoke(nome) {
    let urlNew = `https://pokeapi.co/api/v2/pokemon/${nome}`

    try {
        const risultato = await fetch(urlNew);
        const pokemon = await risultato.json();
        //INVOCATION
        createData(row, pokemon)
    } catch (error) {
        console.log(error)
    }
}

//create data
function createData(target, pokemon) {
    console.log(pokemon)
    nomePokemon.innerHTML = pokemon.species.name
    let myTemplate = `
        <!-- foto più info -->
        <section class="px-3 px-md-0">
          <div class="container shadow rounded-3">
            <div class="row justify-content-center gap-1 flex-nowrap">
              <!-- contenitore immagine -->
              <div class="col-6 d-flex justify-content-center shadow p-4 rounded-3 position-relative">

                <img src="${pokemon.sprites.other.dream_world.front_default}" class="img-fluid">

                ${genSexForMe()}
              </div>
              <!-- contenitore dati lato destro -->
              <div class="col-6  p-3 shadow py-4 rounded-3">
                <div class="row">
                    <div class="col-12 d-flex flex-column px-md-5"> 
                        <ul class="list-unstyled d-flex flex-column justify-content-center align-items-md-center" id="listaUno">
                            <!-- statistiche -->
                            ${showStatistics(pokemon.stats)}
                        </ul>

                        <div class="row align-items-center justify-content-around">
                            <div class="col-12 d-flex justify-content-md-end">
                                
                            </div>

                            <div class="col-12 mt-5 d-flex justify-content-md-center">
                                ${genMySign(pokemon)}
                            </div>
                        </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- abilità, mosse, indici di gioco -->
        <section class="px-3 px-md-0">
          <div class="container py-5">
            <div class="row justify-content-center">
              <!-- abilità -->
              <div class="col-md-4 mb-4 mb-md-0 shadow">
                <h6 class="text-capitalize">Abilità</h6>
                <div class="row flex-wrap">
                  <div class="col-12 p-3">
                    ${genAbility(pokemon)}
                  </div>
                </div>
              </div>
              <!-- mosse -->
              <div class="col-md-4 mb-4 mb-md-0 shadow">
                <h6 class="text-capitalize">Mosse</h6>
                <div class="row flex-wrap">
                  <div class="col-12 p-3">
                    ${genMoves(pokemon)}
                  </div>
                </div>
              </div>
              <!-- indici di gioco -->
              <div class="col-md-4 mb-4 mb-md-0 shadow">
                <h6 class="text-capitalize">Indici di gioco</h6>
                <div class="row flex-wrap">
                  <div class="col-12 p-3">
                    ${genMyIndexes(pokemon)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    `
    target.innerHTML = myTemplate;
}

//ciclo per statistiche
function showStatistics(obj) {
    let string = ``;
    obj.forEach(element => {
        string += `<li class="border-md-start border-1 border-dark-subtle text-capitalize" style="font-size: 2vh">${element.stat.name}: <strong>${element.base_stat}</strong></li> <hr class="border border-1 border-dark-subtle">`;
    });
    return string
}

//generazione sesso
function genSexForMe() {
    let male = `<i class="fa-solid fa-mars fa-3x position-absolute end-0 translate-middle-x opacity-75" style="color: blue;"></i>`;
    let female = `<i class="fa-solid fa-venus fa-3x position-absolute end-0 translate-middle-x opacity-75" style="color: purple;"></i>`;
    let casualNumber = Math.floor(Math.random()*2);
    
    if(casualNumber === 0) {
       return male;
    }else {
        return female;
    }
}

//generazione etichette segno
function genMySign(obj) {
    let etichetta = ``;
    obj.types.forEach(sign => {
        switch(sign.type.name) {
            case "poison":
                etichetta += `<a href="#" class="text-capitalize text-decoration-none my-text-color btn my-bg-purple text-white me-1 mb-1 mb-md-0">${sign.type.name}</a>`;
                break;
            case "grass":
                etichetta += `<a href="#" class="text-capitalize text-decoration-none my-text-color btn btn-success text-white me-1 mb-1 mb-md-0">${sign.type.name}</a>`;
                break;
            case "fire":
                etichetta += `<a href="#" class="text-capitalize text-decoration-none my-text-color btn btn-danger text-white me-1 mb-1 mb-md-0">${sign.type.name}</a>`;
                break;
            case "water":
                etichetta += `<a href="#" class="text-capitalize text-decoration-none my-text-color btn btn-primary text-white me-1 mb-1 mb-md-0">${sign.type.name}</a>`;
                break;
            case "bug":
                etichetta += `<a href="#" class="text-capitalize text-decoration-none my-text-color btn my-bg-dark-green text-white me-1 mb-1 mb-md-0">${sign.type.name}</a>`;
                break;
            case "electric":
                etichetta += `<a href="#" class="text-capitalize text-decoration-none my-text-color btn btn-warning text-black me-1 mb-1 mb-md-0">${sign.type.name}</a>`;
                break;
            case "normal":
                etichetta += `<a href="#" class="text-capitalize text-decoration-none my-text-color btn btn-dark text-white me-1 mb-1 mb-md-0">${sign.type.name}</a>`;
                break;
            case "ground":
                etichetta += `<a href="#" class="text-capitalize text-decoration-none my-text-color btn my-bg-brown text-white me-1 mb-1 mb-md-0">${sign.type.name}</a>`;
                break;
            case "flying":
                etichetta += `<a href="#" class="text-capitalize text-decoration-none my-text-color btn my-bg-acqua text-black me-1 mb-1 mb-md-0">${sign.type.name}</a>`;
                break;
            case "psychic":
                etichetta += `<a href="#" class="text-capitalize text-decoration-none my-text-color btn btn-secondary text-white me-1 mb-1 mb-md-0">${sign.type.name}</a>`;
                break;
            case "fighting":
                etichetta += `<a href="#" class="text-capitalize text-decoration-none my-text-color btn my-bg-antico text-black me-1 mb-1 mb-md-0">${sign.type.name}</a>`;
                break;
            case "fairy":
                etichetta += `<a href="#" class="text-capitalize text-decoration-none my-text-color btn my-bg-antico text-black me-1 mb-1 mb-md-0">${sign.type.name}</a>`;
                break;
            case "ice":
                etichetta += `<a href="#" class="text-capitalize text-decoration-none my-text-color btn my-bg-silver text-black me-1 mb-1 mb-md-0">${sign.type.name}</a>`;
                break;
            case "dragon":
                etichetta += `<a href="#" class="text-capitalize text-decoration-none my-text-color btn my-bg-brown text-white me-1 mb-1 mb-md-0">${sign.type.name}</a>`;
                break;
            case "steel":
                etichetta += `<a href="#" class="text-capitalize text-decoration-none my-text-color btn my-bg-silver text-black me-1 mb-1 mb-md-0">${sign.type.name}</a>`;
                break;
            case "rock":
                etichetta += `<a href="#" class="text-capitalize text-decoration-none my-text-color btn btn-outline-dark text-black me-1 mb-1 mb-md-0">${sign.type.name}</a>`;
                break;
            case "ghost":
                etichetta += `<a href="#" class="text-capitalize text-decoration-none my-text-color btn my-bg-silver text-black me-1 mb-1 mb-md-0">${sign.type.name}</a>`;
                break;
            default:
                etichetta += `E' stato trovato un simbolo ma non so catalogarlo, contatta lo sviluppatore!`
        }
    })
    return etichetta
}

//generazione abilità
function genAbility(obj) {
    let singleAbility = ``
    obj.abilities.forEach(ability => {
        singleAbility += `<p style="font-size: 1.5rem" class="text-capitalize">- ${ability.ability.name}</p>`;
    });
    return singleAbility
}

//generazione mosse
function genMoves(obj) {
    let moves = ``;
    obj.moves.forEach(move => {
        moves += `<p style="font-size: 1.5rem" class="text-capitalize">- ${move.move.name}</p>`;
    })
    return moves
}

//generazione indici di gioco
function genMyIndexes(obj) {
    let indexes = ``;
    obj.game_indices.forEach(gameIndex => {
        indexes += `<p style="font-size: 1.3rem" class="text-capitalize">Indice: <strong>${gameIndex.game_index}</strong> nella versione <strong>${gameIndex.version.name}</strong></p>`
    })
    return indexes;
}

//carosello immagini
// function getCarousel(obj) {
//     let elementForAppend = ``;
//     //array di appoggio che conterrà i link delle foto
//     let myLinkList = [];
//     //cicliamo le chiavi e nel caso corrispondono a stringa le pushamo nell'array dei links
//     for(let value in obj.sprites) {
//         let appoggio = obj.sprites[value]
//         if(typeof(appoggio) === "string") {
//             myLinkList.push(appoggio)
//         }
//     }
//     console.log(myLinkList)
//     for(let i=0; i<myLinkList.length; i++){
//         if(i === 0){
//             elementForAppend += `<div class="carousel-item active my-bg-adapter" style="background-image: url('${myLinkList[i]}')">
                                
//                                 </div>
//                             `;
//         }else if(i === 3) {
//             elementForAppend += ``;
//         } else {
//             elementForAppend += `<div class="carousel-item my-bg-adapter" style="background-image: url('${myLinkList[i]}')">
                                
//                                 </div>
//                             `;
//         }
//     }
//     return elementForAppend;
// }

// execution
singlePoke(nome)
