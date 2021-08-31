"user strict";

const showMenu = () => {
    console.log("CÓDIGO - NOMBRE DEL PRODUCTO - COSTO")

    for (let product of products) {
        console.log(`${product.code} - ${product.name} - ${product.cost} USD`)
    }
}

    
