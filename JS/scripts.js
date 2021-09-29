"user strict";

/**
 * Logica de la consola para crear pedidos y cobrar los pedidos del usuario
 */
const user = {
    name: "Usuario",
    age: 999999,
    debt: 0
}

let order = []
let orderCost = 0

// Lista todos los productos del menú en un formato amigable
const showMenu = () => {
    console.log("CÓDIGO - NOMBRE DEL PRODUCTO - COSTO")

    for (let product of products) {
        console.log(`${product.code} - ${product.name} - ${product.cost} USD`)
    }
}

// Función que guarda en la lista de pedidos cada producto que se pide
const orderProduct = cod => {
    if (!cod || typeof cod === "number" || typeof cod === "boolean") return "Ingrese un codigo valido"

    const productFound = products.find(product => product.code === cod)
    if (!productFound) return "El producto no existe"
    
    order.push(productFound)
    
    console.log("El producto ha sido agregado a su pedido. Su pedido es:")
    return seeOrder()
}

const seeOrder = () => order

// Función que calcula el costo de todos los pedidos 
const calculateCost = () => {
    let cost = 0
    for (product of order) {
        cost += product.cost
    }
    orderCost = cost
    return orderCost
}

// Función que calcula y guarda en la deuda el costo de todos los pedidos y notifica al usuario
const finalizeOrder = () => {
    calculateCost()
    user.debt = orderCost

    order = []
    orderCost = 0

    return `${user.name}, debes pagar ${user.debt} USD`
}

// Función que permite pagar todo el pedido y entregar el cambio sies necesario
const payOrder = amountDelivered => {
    if (amountDelivered > user.debt) {
        let message = `Tu pedido ha sido pagado y tu cambio es de ${amountDelivered - user.debt}`
        user.debt = 0
        return message
    }
    else if (amountDelivered === user.debt) {
        user.debt = 0
        return `Tu pedido ha sido pagado.`
    }
    else {
        return `No te alcanza para pagar tu pedido.`
    }
}
