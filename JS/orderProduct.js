"user strict";

/**
 * Función que guarda en la lista de pedidos cada producto que se pide
 */
let order = []

const orderProduct = cod => {
    if (!cod || typeof cod === "number" || typeof cod === "boolean") return "Ingrese un codigo valido"

    const productFound = products.find(product => product.code === cod)
    if (!productFound) return "El producto no existe"
    
    order.push(productFound)
    
    console.log("El producto ha sido agregado a su pedido. Su pedido es:")
    return seeOrder()
}

// Funcion que permite ver el pedido por la consola

const seeOrder = () => order