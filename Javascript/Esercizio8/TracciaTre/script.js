//dichiaro l'oggetto
const oggetto = {
    "gender": "female",
    "name": {
      "title": "Miss",
      "first": "Jennie",
      "last": "Nichols"
    },
    "location": {
      "street": {
        "number": 8929,
        "name": "Valwood Pkwy",
      },
      "city": "Billings",
      "state": "Michigan",
      "country": "United States",
      "postcode": "63104",
      "coordinates": {
        "latitude": "-69.8246",
        "longitude": "134.8719"
      },
      "timezone": {
        "offset": "+9:30",
        "description": "Adelaide, Darwin"
      }
    },
    "email": "jennie.nichols@example.com",
    "login": {
      "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
      "username": "yellowpeacock117",
      "password": "addison",
      "salt": "sld1yGtd",
      "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
      "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
      "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
    },
    "dob": {
      "date": "1992-03-08T15:13:16.688Z",
      "age": 30
    },
    "registered": {
      "date": "2007-07-09T05:51:59.390Z",
      "age": 14
    },
    "phone": "(272) 790-0888",
    "cell": "(489) 330-2385",
    "id": {
      "name": "SSN",
      "value": "405-88-3636"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/75.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
    },
    "nat": "US"
  }

//inizializzo la funzione per la restituzione del nome e cognome
function getNameAndLastName(obj) {
    console.log(`${obj.name.first} ${obj.name.last}`)
}

//invoco la funzione e gli passo come parametro l'oggetto
getNameAndLastName(oggetto)

//inizializzo la funzione per la composizione dell'indirzzo
function getAddress(obj) {
    console.log(`Street ${obj.location.street.name}, ${obj.location.street.number} ${obj.location.city} (${obj.location.postcode}) ${obj.location.state} ${obj.location.country}`);
}

//invoco la funzione e passo l'oggetto come parametro
getAddress(oggetto)

//inizializzo la funzione che restituisce un oggetto contenente email, username e passwd
function getUserAccountInfo(obj) {
    const mail = obj.email;
    const user = obj.login.username;
    const passwd = obj.login.password

    const obMail = {
        mail: mail,
        username: user,
        password: passwd
    }

    return obMail
}

//invoco la funzione e gli passo l'oggetto
let accountInfo = getUserAccountInfo(oggetto);


//inizializzo la funzione per innestare nell'HTML i dati
function insertData(persona) {
    return `<h1>${persona.username}</h1>\n<p>${persona.mail}</p>\n<small>${persona.password}</small>`
}

//invoco la funzione e gli passo l'oggetto con le info della persona
let innestoDati = insertData(accountInfo)
console.log(innestoDati)

//dichiaro la variabile stringa contenente la card di bootstrap
let stringa = `<div class="card" style="width: 18rem;">
<img src="..." class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>`

//dichiaro la mia array che rappresenta la lista users
const users = [];

//inizializzo la funzione per inserire l'utente negli users
function addPersonToUsers(persona) {
    users.push(persona)
}

//invoco la funzione e gli passo l'utente da inserire
addPersonToUsers(accountInfo);

//controllo la lista utenti per vedere se l'inserimento è andato a buon fine
console.log(users)