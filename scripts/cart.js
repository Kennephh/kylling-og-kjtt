import ProductModule from "./modules/ProductModule.js";

const cartOutputSection = document.querySelector("#cart-output-section");
const emptyCartOutputSection = document.querySelector("#output-empty-cart-section");
const emptyCartBtn = document.querySelector("#empty-cart-btn");

const lsKey = "cart";
const emptyMessage = "Handlekurven er tom!";

const showProductsInCart = () => {

    if (localStorage.getItem(lsKey) != null) {
        const cartLS = JSON.parse(localStorage.getItem(lsKey));
        const productsInCart = [];

        cartLS.forEach( product => {
            const productInCart = productsInCart.find(productInCart => product.id === productInCart.id);
            if (productInCart != null) {
                productInCart.quantity += 1;
                productInCart.price += product.price;
            } else {
                const productCart = {
                id: product.id,
                name: product.name,
                image: product.image,
                price: product.price,
                quantity: 1
            }
            productsInCart.push(productCart);
            }
        } );
        let htmlTxt = "";
        productsInCart.forEach( product => {
            htmlTxt += `
                <article class="product-box xs-12">
                    <div class="img-container">
                        <img 
                            class="img-responsive"
                            src="images/${product.image}" 
                            alt="${product.name} Foto."/>
                    </div>
                        <p class="product-box__title">${product.name}</p>
                        <p class="product-box__price">${product.price} kr</p>
                        <p class="product-box__title" id="quantity">${product.quantity} stk</p>
                </article>
            `;
        } );
        cartOutputSection.innerHTML = htmlTxt;
    } else {
        emptyCartOutputSection.innerHTML = emptyMessage;
    }
} 

const emptyCart = () => {
    localStorage.removeItem(lsKey);
    cartOutputSection.innerHTML = "";
    emptyCartOutputSection.innerHTML = emptyMessage;
}

showProductsInCart();
emptyCartBtn.addEventListener("click", emptyCart);