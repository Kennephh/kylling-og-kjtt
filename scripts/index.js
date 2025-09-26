import ProductModule from "./modules/ProductModule.js";

const productSection = document.querySelector("#product-output-section")

const showAllProducts = () => {

    const allProducts = ProductModule.getAll();
    let htmlTxt = "";
    
    allProducts.forEach( product => {
        htmlTxt += `
            <article class="product-box xs-12 sm-6 md-4 lg-3">
                <div class="img-container">
                    <img 
                        class="img-responsive"
                        src="images/${product.image}" 
                        alt="${product.name}. Foto." />
                </div>
                <h3 class="product-box__title">${product.name}</h3>
                <p class="product-box__price">${product.price} kr</p>
                <button data-id="${product.id}" class="product-box__btn btn--centered">                            
                    <i class="fa-solid fa-cart-shopping"></i>
                </button>
            </article>
        `;
    } );
    productSection.innerHTML = htmlTxt; 
    setEventOnButtons();
}

const setEventOnButtons = () => {
    const buttons = document
    .getElementById("product-output-section")
    .querySelectorAll("button");

    buttons.forEach( button => {
        button.
        addEventListener("click", addProductToCart)
    } )
}

const addProductToCart = (event) => {
    const lsKey = "cart";

    // Id'er til produkter som er lagt til
    const id = parseInt( event.currentTarget.dataset.id );
    const productsAdded = ProductModule.getById(id);

    if (localStorage.getItem(lsKey) != null) {
        // Hente
        const cart = JSON.parse(localStorage.getItem(lsKey));
        // Oppdatere
        cart.push(productsAdded);
        // Lagre
        localStorage.setItem(lsKey, JSON.stringify(cart));
    } else {
        localStorage.setItem(lsKey, JSON.stringify([productsAdded]));
    }
}
showAllProducts();
