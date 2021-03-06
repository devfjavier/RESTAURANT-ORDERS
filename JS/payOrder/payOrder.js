"user strict";

/**
 * Función que permite pagar todo el pedido y entregar el cambio si es necesario
 */
const payOrder = amountDelivered => {
    if (!orderFinalized) return "Primero debes finalizar el pedido, usa finalizeOrder()"

    const debt = document.getElementById("debt")
    
    if (amountDelivered > user.debt) {
        let message = `Tu pedido ha sido pagado y tu cambio es de ${amountDelivered - user.debt}`
        user.debt = 0
        debt.textContent = user.debt
        orderFinalized = false
        return message
    }
    else if (amountDelivered === user.debt) {
        user.debt = 0
        debt.textContent = user.debt
        orderFinalized = false
        return `Tu pedido ha sido pagado.`
    }
    else {
        return `No te alcanza para pagar tu pedido.`
    }
}