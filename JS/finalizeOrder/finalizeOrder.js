"user strict";

/**
 * Función que calcula y guarda en la deuda el costo de todos los pedidos y notifica al usuario
 */
let orderFinalized = false

const finalizeOrder = () => {
    const debt = document.getElementById("debt")
    const orderList = document.getElementById("order-list")
    const productsNumber = document.getElementById("products-number")
    const totalPrice = document.getElementById("total-price")

    calculateCost()
    user.debt = orderCost
    debt.textContent = user.debt

    orderList.innerHTML = ""
    productsNumber.innerHTML = 0
    totalPrice.innerHTML = 0
    order = []
    orderCost = 0
    orderFinalized = true

    return `${user.name}, debes pagar ${user.debt} USD`
}