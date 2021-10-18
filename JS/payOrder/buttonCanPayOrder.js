"use strict";

/**
 * Carga las referencias de los elementos del estadodel pedido para usarlos en otras funciones 
 */
addEventListener("DOMContentLoaded", () => {
    const payOrderButton = document.getElementById("pay-order")
    const mount = document.getElementById("amount-delivered")
    const debt = document.getElementById("debt")
    
    payOrderButton.addEventListener("click", () => {
        if (!orderFinalized) {
            const message = "Primero debes finalizar el pedido, click en el boton Finalizar pedido"
            return console.log(message)
        }

        if (mount.value > user.debt) {
            let message = `Tu pedido ha sido pagado y tu cambio es de ${mount.value - user.debt}`
            user.debt = 0
            debt.textContent = user.debt
            orderFinalized = false
            console.log(message)
        }
        else if (mount.value == user.debt) {
            user.debt = 0
            debt.textContent = user.debt
            orderFinalized = false
            console.log(`Tu pedido ha sido pagado.`)
        }
        else {
            console.log(`No te alcanza para pagar tu pedido.`)
        }
    })
})