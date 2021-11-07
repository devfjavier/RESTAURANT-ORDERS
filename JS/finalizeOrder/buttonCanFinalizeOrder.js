"use strict";

/**
 * Funcion que permite que el boton Finalizar pedido finalize el pedido 
 */
addEventListener("DOMContentLoaded", () => {
    const finalizeOrderButton = document.getElementById("finalize-order")
    const debt = document.getElementById("debt")
    const orderList = document.getElementById("order-list")
    const productsNumber = document.getElementById("products-number")
    const totalPrice = document.getElementById("total-price")

    finalizeOrderButton.addEventListener("click", () => {
        if (order.length === 0) {
            return console.log("No tienes ningun producto ordenado");
        }
        
        calculateCost()
        user.debt = orderCost
        debt.textContent = user.debt
        
        orderList.innerHTML = ""
        productsNumber.innerHTML = 0
        totalPrice.innerHTML = 0
        order = []
        orderCost = 0
        orderFinalized = true
        const message = `${user.name}, debes pagar ${user.debt} USD`
        console.log(message)
    })
})