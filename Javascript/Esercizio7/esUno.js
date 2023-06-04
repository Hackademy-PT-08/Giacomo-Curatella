// Scrivi una funzione Javascript che stampi in console se un libro è stato letto o meno controllando la proprietà dell’oggetto

//array di libri
const library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }
];

//inizializzo la funzione
function readOrNot(libreria) {
    libreria.forEach(book => {
        if(book.readingStatus === true) {
            console.log(`${book.title} di ${book.author} è stato letto!`)
            return;
        }
    
        console.log(`${book.title} di ${book.author} NON è ancora stato letto!`)
    })
}

//invoco la funzione
readOrNot(library)

