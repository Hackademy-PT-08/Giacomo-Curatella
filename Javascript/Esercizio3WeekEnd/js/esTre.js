/*
controllo pwd
deve contenere almeno 6 car max 20
deve contenere almeno uno dei seguenti simboli "!, _, -"
deve contenere almeno un numero
*/

function passCheck() {
    //faccio inserire la pwd dall'utente
    let pwd = prompt("Inserisci la Password:");
    // creo una variabile che contiene il pattenr per il controllo dei numeri
    let pattern = /\d/;
    if(!pwd == "") {
        //controllo che la pass contenga i caratteri speciali richiesti dalla traccia
        if(!pwd.includes("!") && !pwd.includes("_") && !pwd.includes("-")){
            alert(`Deve contenere almeno un carattere speciale es:("!","-","_")`);
            passCheck();
        //controllo che sia formata da min 6 caratteri e massimo 20
        }else if(pwd.length < 6 || pwd.length > 20) {
            alert("Min 6 car, Max 20")
            passCheck();
        //controllo che ci sia almeno un numero all'interno della pwd
        }else if(pattern.test(pwd) == false) {
            alert("La pass deve contenere almeno un numero");
            passCheck();
        //notifico all'utente che la pwd rispetta il formato richiesto
        }else {
            let par = document.querySelector('#titolo');
            par.style.color = "Green";
            par.classList.add("text-center", "mt-5");
            par.innerHTML = "La password da lei inserita rispetta il formato richiesto";
        }
    }else {
        alert("Devi digitare la password!");
        passCheck();
    }
}

passCheck();





