//lista prodotti
const products = [
	{
		"id": 1,
		"title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
		"price": 109.95,
		"description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
		"category": "clothing",
		"image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
		"rating": {
			"rate": 3.9,
			"count": 120
		}
	},
	{
		"id": 2,
		"title": "Mens Casual Premium Slim Fit T-Shirts ",
		"price": 22.3,
		"description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
		"category": "clothing",
		"image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
		"rating": {
			"rate": 4.1,
			"count": 259
		}
	},
	{
		"id": 3,
		"title": "Mens Cotton Jacket",
		"price": 55.99,
		"description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
		"category": "clothing",
		"image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
		"rating": {
			"rate": 4.7,
			"count": 500
		}
	},
	{
		"id": 8,
		"title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
		"price": 10.99,
		"description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
		"category": "jewelery",
		"image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
		"rating": {
			"rate": 1.9,
			"count": 100
		}
	},
	{
		"id": 9,
		"title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
		"price": 64,
		"description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
		"category": "electronics",
		"image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
		"rating": {
			"rate": 3.3,
			"count": 203
		}
	}, 
	{
		"id": 10,
		"title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
		"price": 109,
		"description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
		"category": "electronics",
		"image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
		"rating": {
			"rate": 2.9,
			"count": 470
		}
	},
	{
		"id": 6,
		"title": "Solid Gold Petite Micropave ",
		"price": 168,
		"description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
		"category": "jewelery",
		"image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
		"rating": {
			"rate": 3.9,
			"count": 70
		}
	}
]

//inizializzo il costruttore dei prodotti
class Product {
    constructor(id, nome, prezzo, descrizione, categoria, img, voto) {
		this.id	= id;
		this.nome = nome;
		this.prezzo = prezzo;
		this.descrizione = descrizione;
		this.categoria = categoria;
		this.img = img;
		this.voto = voto;
	}
};

//rimappo "products" nel nuovo array "newProductsList"
const newProductsList = products.map(({ id, title, price, description, category, image, rating}) => ({
	label: id,
	titolo: title,
	prezzo: price,
	descrizione: description,
	categoria: category,
	img: image,
	voto: rating
}));

//simuliamo la ricerca dell'utente
const keyWord = "jewelery";

//inizializzo la funzione per la ricerca degli elementi in base alla categoria
function searchObject(word) {
	const ris = newProductsList.filter(articolo => articolo.categoria === word);
	return ris
}

//invoco la funzione di ricerca e come parametro gli passo la variabile che contiene la categoria cercata dall'utente.
let findObject = searchObject(keyWord);
// console.log(findObject)

//simuliamo l'input da parte dell'utente per quanto riguarda la ricerca tramite voto >=
const voto = 3.9;

//inizializzo la funzione per la ricerca dell'articolo in base al voto
function checkVote(vote) {
	const voteChecked = newProductsList.filter(voto => voto.voto.rate >= vote);
	return voteChecked;
}

//invoco la funzione e gli passo come parametro il voto che l'utente ha inserito
let controlloVoto = checkVote(voto);
// console.log(controlloVoto)

//simulo linput da parte dell'utente per la ricerca in base al prezzo
let myPrice = 100;

//inizializzo la funzione per la ricerca in base al prezzo
function checkPrice(prezzo) {
	let priceChecked = newProductsList.filter(articolo => articolo.prezzo >= prezzo);
	return priceChecked;
}

//invoco la funzione e gli passo come parametro il prezzo che cerca l'utente
let priceOrdered = checkPrice(myPrice);
// console.log(priceOrdered)

//inizializzo la funzione per la ricerca in base al prezzo
function checkPrice(prezzo) {
	let priceChecked = newProductsList.filter(articolo => articolo.prezzo <= prezzo);
	return priceChecked;
}

//invoco la funzione e gli passo come parametro il prezzo che cerca l'utente
let priceDeOrdered = checkPrice(myPrice);
// console.log(priceOrdered)


//inizializzo la funzione per popolare src ed alt di ogni img che andrò a creare
function populateMyAttr(lista) {
	let myArray = [];
	lista.forEach(articolo => {
		myArray.push(`<img src="${articolo.img}" alt="${articolo.descrizione}"></img>`)
	});
	return myArray
}

//invoco la funzione e gli passo come paramentro la lista degli articoli
let populatedStrings = populateMyAttr(newProductsList)
// console.log(populatedStrings)


//dichiaro la lista dei preferiti
const wishList = [];
//inizializzo la funzione add to whishlist
function addToWishList(oggetto) {
	//genero un numero casuale per 3 volte quello sarà l'indice del prodotto che pusherò
	for (let i = 0; i < 3; i++) {
		let randomNumber = Math.ceil(Math.random()*newProductsList.length);
		wishList.push(oggetto[randomNumber])
	}
}
//invoco la funzione e gli passo come paramentro la lista dei prodotti aggiornata
addToWishList(newProductsList)

//dichiaro la funzione che mi restituirà tutti i prodotti nella wishList
function showWishList(listaDesideri) {
	listaDesideri.forEach(articolo => {
		console.log(articolo)
	})
}

//invoco la funzione e gli passo come parametro la wishlist
showWishList(wishList);
