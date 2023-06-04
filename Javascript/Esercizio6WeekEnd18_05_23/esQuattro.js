//dichiariamo la nostra libreria
const LIBRI = [
    {
      titolo: "Il Signore degli Anelli",
      autore: "Tolkien",
      categoria: "fantasy"
    },
    {
      titolo: "Harry Potter",
      autore: "Rowling",
      categoria: "fantasy",
    },
    {
      titolo: "Il Conte di Montecristo",
      autore: "Dumas",
      categoria: "narrativa classica"
    },
    {
      titolo: "Dune",
      autore: "Herbert",
      categoria: "fantascienza"
    },
    {
      titolo: "Fight Club",
      autore: "Palahniuk",
      categoria: "narrativa moderna"
    }
  ];

//input utente
let customInput = prompt(`Inserisci una categoria tra queste per cercare il tuo libro: "Narrativa moderna", "Fantascienza", "Fantasy" o "Narrativa classica"`)

//inizializziamo la funzione di ricerca del libro
function findBook(keyWord) {
    //salviamo il risutato del filter nella variabile ris
    let ris = LIBRI.filter(libro => libro.categoria.toLowerCase().includes(keyWord.toLowerCase()));
    //se la lunghezza dell'array che citorna è === zero
    if(ris.length === 0) {
    //notifichiamo all'utente che non abbiamo trovato nessun libro
    console.log(`Non ho trovato nessun libro che abbia quel genere`);
    }
    //altrimenti con un ciclo for componiamo la struttura  dell'anchor per ogni libro trovato rispettando il formato richiesto
    ris.forEach(book => {
    console.log(`<a href="www.lamiasuperlibreria.aulab/${book.autore.toLowerCase()}/${book.titolo.toLowerCase().replace(/ /g, "-")}.html">${book.titolo.toLowerCase().replace(/ /g, "-")}</a>`);
    })
}
//facciamo l'output in console del risultato finale
console.log(findBook(customInput))

