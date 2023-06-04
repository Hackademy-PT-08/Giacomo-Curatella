//dichiariamo l'oggetto calendario---------------------------------------------------------------------------
let calendario = {
    lunedi: [],
    martedi: [],
    mercoledi: [],
    giovedi: [],
    venerdi: [],
    sabato: [],
    domenica: []
}

//costruttore evento-----------------------------------------------------------------------------------------
class Evento {
    constructor(nomeEvento, inizioEvento) {
        this.nomeEvento = nomeEvento;
        this.inizioEvento = inizioEvento;
    }
}
//funzione per push------------------------------------------------------------------------------------------
function inserisci (evento, giorno) {
    calendario[giorno].push(evento);
}
//ordiniamo gli eventi per orario----------------------------------------------------------------------------
function orderAppointments (calendario, giorno) {
    calendario[giorno].sort(function(a, b){
            return a["inizioEvento"].replace(/:/g, '') - b["inizioEvento"].replace(/:/g, '');
          });
    console.log(calendario)
    
}
//inizializzo la funzione per la ricerca degli appuntamenti di quel giorno--------------------------------------
function cercaAppuntamenti(giorno) {
    calendario[giorno].forEach(appuntamento => {
        console.log(appuntamento)
    });
}

// creiamo l'oggetto appuntamento-----------------------------------------------------------------------------
let customInput3 = new Evento("festa Giacomino", "19:30");
let customInput = new Evento("festa Jody", "18:30");
//passiamo l'oggetto e il giorno alla funzione
inserisci(customInput3, "lunedi");
inserisci(customInput, "lunedi");

// invochiamo la funzione per ordinare gli appuntamenti-------------------------------------------------------
orderAppointments(calendario, "lunedi");

//simuliamo l'input dell'utente scrivendo il giorno nella variabile "cerca"-----------------------------------
let cerca = "lunedi";
//salviamo tutte le chiavi nella variabile "giorni"
let giorni = Object.keys(calendario);
//controlliamo se il giorno della settimana passato dall'utente è presente nel nostro calendario quindi se l'oggetto esiste
let giornoTrovato = giorni.filter(giorno => giorno === cerca);
//stampiamo in console il giorno trovato per controllo
console.log(giornoTrovato)
//invochiamo la funzione di ricerca appuntamenti e gli passiamo il giorno della settimana che vogliamo sfogliare avendone già controllato l'esistenza
cercaAppuntamenti(giornoTrovato);


