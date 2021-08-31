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

const orderProduct = cod => {
    if (!cod || typeof cod === "number" || typeof cod === "boolean") return "Ingrese un codigo valido"

    const productFound = products.find(product => product.code === cod)
    if (!productFound) return "El producto no existe"
    
    order.push(productFound)
    
    console.log("El producto ha sido agregado a su pedido. Su pedido es:")
    return order
} 
