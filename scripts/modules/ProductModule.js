const ProductModule = (() => {

    const productList = [
        {
            id: 1,
            name: "Chipotle pølser",
            image: "chipotle-pølse.jpg",
            price: 49, /*In NOK*/
        },
        {
            id: 2,
            name: "Fårikålkjøtt",
            image: "fårikålkjøtt.jpg",
            price: 69, /*In NOK*/
        },
        {
            id: 3,
            name: "Grillpølser",
            image: "grillpølser.jpg",
            price: 40, /*In NOK*/
        },
        {
            id: 4,
            name: "Karbonadedeig",
            image: "karbonadedeig.jpg",
            price: 75, /*In NOK*/
        },
        {
            id: 5,
            name: "Karbonader",
            image: "karbonader.jpg",
            price: 65, /*In NOK*/
        },
        {
            id: 6,
            name: "Kyllingkjøttdeig",
            image: "kyllingkjøttdeig.jpg",
            price: 70, /*In NOK*/
        },
        {
            id: 7,
            name: "Røkte Kjøttpølser",
            image: "røkte-kjøttpølser.jpg",
            price: 55, /*In NOK*/
        },
        {
            id: 8,
            name: "Wienerpølser",
            image: "wienerpølser.jpg",
            price: 40, /*In NOK*/
        }
    ];

    const getAll = () => {
        return structuredClone(productList);
    }

    const getById = (id) => {
        const productClicked = productList
        .find( product => product.id === id );
        return structuredClone(productClicked);
    }

    return{
        getAll,
        getById
    }
})();
export default ProductModule;