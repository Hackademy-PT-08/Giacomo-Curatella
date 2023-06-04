//variabili
const productsSpace = document.querySelector(`#productsSpace`);
const find = document.querySelector(`#find`);
//function

//show products
function showProducts(target, object) {
    object.forEach(prodotto => {
        //creiamo la col
        let col = document.createElement('div');
        col.classList.add("col-12", "col-md-6", "col-lg-3");
        target.appendChild(col)
        //creiamo il div interno della card
        let myDiv = document.createElement('div');
        myDiv.classList.add("card");
        //creiamo la card
        let card = `
        <div class="card-body py-5 d-flex flex-column" style="height: 85vh">
        <div class="my-bg mb-4 position-relative" style="background-image: url(${prodotto.image});">
        <p class="card-text text-black position-absolute bottom-0 bg-primary rounded-end-3 px-3 py-1">Punteggio recensioni: ${prodotto.rating.rate} <i class="fa-solid fa-star" style="color: #f6d32d;"></i></p></div>
        <h4 class="card-title mb-4 text-primary">${prodotto.title}</h4>
        <p class="card-text">${prodotto.description}</p>
        <p class="card-text text-danger">Categoria: ${prodotto.category}</p>
        <p class="card-text text-success">Prezzo: ${prodotto.price}€</p>
        
        </div>
        `;
        col.innerHTML = card
        col.appendChild(myDiv);
        
    });
}

//find category based
find.addEventListener('change', ()=> {
    let searchedProd = products.filter(product => product.category === find.value);
    if(searchedProd.length > 0) {
        let string = ``
        searchedProd.forEach(prod => {
            string += `<div class="col-12 col-md-6 col-lg-4">
                            <div class="card">
                                <div class="card-body py-5 d-flex flex-column">
                                    <div class="my-bg mb-4" style="background-image: url(${prod.image});"></div>
                                    <h4 class="card-title mb-4 text-primary">${prod.title}</h4>
                                    <p class="card-text">${prod.description}</p>
                                    <p class="card-text text-danger">Categoria: ${prod.category}</p>
                                    <p class="card-text text-success">Prezzo: ${prod.price}€</p>
                                    <p class="card-text">Punteggio recensioni: ${prod.rating.rate} <i class="fa-solid fa-star" style="color: #f6d32d;"></i></p>
                                </div>
                            </div>
                        </div>

                        `;
            productsSpace.innerHTML = string;
        })
        return;
    }

    if(find.value === "") {
        productsSpace.innerHTML = "";
        showProducts(productsSpace, products)
    }

})

//execute
showProducts(productsSpace, products)