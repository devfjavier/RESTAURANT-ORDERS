"user strict";
const products = [
    {
        name: "Hamburguesa simple",
        cost: 20,
        code: "H100"
    },
    {
        name: "Hamburguesa doble",
        cost: 30,
        code: "H200"
    },
    {
        name: "Papas fritas",
        cost: 8,
        code: "P100"
    },
    {
        name: "Refresco personal",
        cost: 6,
        code: "R100"
    }
]

const showMenu = () => {
    console.log("CÓDIGO - NOMBRE DEL PRODUCTO - COSTO")

    for (let product of products) {
        console.log(`${product.code} - ${product.name} - ${product.cost} USD`)
    }
}

    
