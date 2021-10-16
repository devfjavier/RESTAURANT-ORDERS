"user strict";

/**
 * Función que calcula y guarda en la deuda el costo de todos los pedidos y notifica al usuario
 */
const finalizeOrder = () => {
    calculateCost()
    user.debt = orderCost

    order = []
    orderCost = 0

    return `${user.name}, debes pagar ${user.debt} USD`
}