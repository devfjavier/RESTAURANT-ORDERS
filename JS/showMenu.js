"user strict";

/**
 * Lista por la consola todos los productos del menú en un formato amigable
 */
const showMenu = () => {
    console.log("CÓDIGO - NOMBRE DEL PRODUCTO - COSTO")

    for (let product of products) {
        console.log(`${product.code} - ${product.name} - ${product.cost} USD`)
    }
}
