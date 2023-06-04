//primo metodo
let playlist = {
    canzoni: [
        {
            titolo: "",
            nomeCantante: "",
            anno: "",
        },
        {
            titolo: "",
            nomeCantante: "",
            anno: "",
        },
    ],
    addSong: function (titolo, nomeCantante, anno, index) {
        this.canzoni[index].titolo = titolo;
        this.canzoni[index].nomeCantante = nomeCantante;
        this.canzoni[index].anno = anno;
    } 
}

playlist.addSong("Like a Rolling Stone", "Bob Dylan", 1965, 0);
playlist.addSong("Imagine", "John Lennon", 1971, 1);

//elenco tutte le canzoni
playlist.canzoni.forEach(canzone => {
    console.log(`Titolo: ${canzone.titolo} - Autore: ${canzone.nomeCantante} - Anno: ${canzone.anno}`);
});


// //secondo metodo(costruttore)

// //costruttore canzone
// class Song {
//     constructor(titolo, nomeCantante, anno) {
//         this.titolo = titolo;
//         this.nomeCantante = nomeCantante;
//         this.anno = anno;
//     }
// }
// //oggetto
// let playlist = {
//     canzoni: [

//     ]
// }
// //creo il brano
// playlist.canzoni.push(new Song("Like a Rolling Stone", "Bob Dylan", 1965));
// playlist.canzoni.push(new Song("Imagine", "John Lennon", 1971));
// playlist.canzoni.push(new Song("Bricioli di allegria", "Blanco", 2022));

// //stampo tutti i brani presenti nella playlist
// playlist.canzoni.forEach(canzone => {
//     console.log(`Dati del brano:\n${canzone.titolo}(Titolo)\n${canzone.nomeCantante}(Autore)\n${canzone.anno}(Anno)`)
// });



