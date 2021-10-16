"user strict";

/**
 * Función que calcula el costo de todos los pedidos 
 */
let orderCost = 0

const calculateCost = () => {
    let cost = 0
    for (product of order) {
        cost += product.cost
    }
    orderCost = cost
    return orderCost
}