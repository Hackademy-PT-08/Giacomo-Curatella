let rubrica = {
    utenti: [
        utenteUno = {
            nome: "Giacomo",
            cognome: "Curatella",
            telefono: "1234565789",
            indirizzo: {
                via: "via le mani dal naso",
                citta: "cicerchia",
                provincia: "CC",
                cap: "12309"
            }
        },
        utenteDue = {
            nome: "Marco",
            cognome: "Rossi",
            telefono: "123456789",
            indirizzo: {
                via: "via del tutto eccezionale",
                citta: "piripacchio",
                provincia: "PI",
                cap: "12376"
            }
        },
        utenteTre = {
            nome: "Luca",
            cognome: "Verdi",
            telefono: "1234567890",
            indirizzo: {
                via: "piazza la bomba e scappa",
                citta: "casinate",
                provincia: "CA",
                cap: "34578"
            }
        },
        utenteQuattro = {
            nome: "Anna",
            cognome: "Rosa",
            telefono: "1234567890",
            indirizzo: {
                via: "via dalle palle",
                citta: "spostate",
                provincia: "SP",
                cap: "78954"
            }
        }
    ],
    getUserInfo: function() {
        rubrica.utenti.forEach(user => {
            console.log(`Nome: ${user.nome} ${user.cognome}\ntel: ${user.telefono}`)
       });
    }
};

//invochiamo il medoto dell'oggetto
rubrica.getUserInfo();

//eliminiamo l'ultimo elemento
rubrica.utenti.pop();

//stampiamo la srubrica aggiornata
rubrica.getUserInfo();


//funzione che scorra tutti gli utenti all'interno della rubrica
let UsersInAgenda = (rubrica) => {
    console.log("Gli utenti presenti in rubrica sono:")
    rubrica.forEach(utente => {
        console.log(`-${utente.nome}`)
    })
}
//invoco la funzione e gli passo come paramentro la lista utenti in rubrica
UsersInAgenda(rubrica.utenti)