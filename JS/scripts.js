"user strict";

const user = {
    name: "Juan",
    age: 30,
    debt: 0
}

const order = []

const showMenu = () => {
    console.log("CÓDIGO - NOMBRE DEL PRODUCTO - COSTO")

    for (let product of products) {
        console.log(`${product.code} - ${product.name} - ${product.cost} USD`)
    }
}

