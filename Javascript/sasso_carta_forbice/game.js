const btn = document.querySelector('button');
const description = document.querySelector('#descrizione');
const risultati =  document.querySelector('#risultati');
const rounds = 3;
const sasso = 0;
const carta = 1;
const forbice = 2;
let partita = 0;
let p = document.querySelector('#logs');
p.classList.add("text-center", "mt-5", "text-white");

function generaNumero() {
    let randomNumber = Math.floor(Math.random()*3);
    return randomNumber;
}

btn.addEventListener('click', ()=>{
    risultati.innerHTML = "";
    p.innerHTML = "";
    let counterPone = 0;
    let counterPdue = 0;
    for(let i=0; i<rounds; i++) {
        let giocatoreUnoMano = [];
        let giocatoreDueMano = [];
        giocatoreUnoMano.push(generaNumero());
        giocatoreDueMano.push(generaNumero());
        
        let manche = document.createElement('h2');
        manche.classList.add("text-primary", "mt-4")
        risultati.appendChild(manche);

        if(giocatoreUnoMano[i] === sasso && giocatoreDueMano[i] === carta) {
            console.log(`P1: sasso, P2: carta! vince il giocatore 2!`);
            manche.innerHTML = `Round ${partita} P1: <i class="fa-solid fa-hand-back-fist" style="color:white"></i> P2: <i class="fa-solid fa-hand" style="color:white"></i>`;
            counterPdue += 1;
        } else if( giocatoreUnoMano[i] === sasso && giocatoreDueMano[i] === forbice) {
            console.log(`P1: sasso, P2: forbice! vince il giocatore 1!`);
            counterPone += 1;
            manche.innerHTML = `Round ${partita} P1: <i class="fa-solid fa-hand-back-fist" style="color:white"></i> P2: <i class="fa-solid fa-hand-scissors" style="color:white"></i>`;
        } else if(giocatoreUnoMano[i] === carta && giocatoreDueMano[i] === sasso) {
            console.log(`P1: carta, P2: sasso! vince il giocatore 1!`);
            counterPone += 1;
            manche.innerHTML = `Round ${partita} P1: <i class="fa-solid fa-hand" style="color:white"></i> P2: <i class="fa-solid fa-hand-back-fist" style="color:white"></i>`;
        }else if(giocatoreUnoMano[i] === carta && giocatoreDueMano[i] === forbice) {
            console.log(`P1: carta, P2: forbice! vince il giocatore 2!`);
            counterPdue += 1;
            manche.innerHTML = `Round ${partita} P1: <i class="fa-solid fa-hand" style="color:white"></i> P2: <i class="fa-solid fa-hand-scissors" style="color:white"></i>`
        }else if(giocatoreUnoMano[i] === forbice && giocatoreDueMano[i] === sasso) {
            console.log(`P1: forbice, P2: sasso! vince il giocatore 2!`);
            counterPdue += 1;
            manche.innerHTML = `Round ${partita} P1: <i class="fa-solid fa-hand-scissors" style="color:white"></i> P2: <i class="fa-solid fa-hand-back-fist" style="color:white"></i>`
        }else if(giocatoreUnoMano[i] === forbice && giocatoreDueMano[i] === carta) {
            console.log(`P1: forbice, P2: carta! vince il giocatore 1!`)
            counterPone += 1;
            manche.innerHTML = `Round ${partita} P1: <i class="fa-solid fa-hand-scissors" style="color:white"></i> P2: <i class="fa-solid fa-hand" style="color:white"></i>`
        }else {
            console.log(`I giocatori hanno pareggiato in questa mano`);
            manche.innerHTML = `Round ${partita} P1 <span class="text-danger">pareggia con</span> P2`
        }
    }
    if(counterPone > counterPdue) {
        p.innerHTML = `Il <strong class="text-success">giocatore 1</strong> vince con <strong class="text-success">${counterPone}</strong> punto/i contro i <strong class="text-danger">${counterPdue}</strong> punto/i dell'<strong class="text-danger">avversario</strong>`;
    }else if(counterPone < counterPdue) {
        p.innerHTML = `Il <strong class="text-success">giocatore 2</strong> vince con <strong class="text-success">${counterPdue}</strong> punto/i contro i <strong class="text-danger">${counterPone}</strong> punto/i dell'<strong class="text-danger">avversario</strong>`;
    }else {
        p.innerHTML = `<span class="text-warning">I giocatori hanno pareggiato con un punteggio di <strong class="text-danger">${counterPone} punti</strong></span>`;
    }
    counterPone = 0;
    counterPdue = 0;
    partita += 1;
    btn.innerHTML = "Gioca ancora!";
    btn.classList.add("btn-success")
    return;
})



