"user strict";

/**
 * Funcion que elimina un pedido ordenado por la consola
 */  
const deleteOrder = code => {
    // Validar que el dato cod sea string
    if (!code || typeof code === "number" || typeof code === "boolean") return "Ingrese un codigo valido"
    const productsNumber = document.getElementById("products-number")
    const totalPrice = document.getElementById("total-price")
    const deleteOrderButtons = document.querySelectorAll(".delete-order")
    
    for (const index in order) {
        if (order[index].code === code) {
            for (const button of deleteOrderButtons) {
                const orderId = button.parentElement.id
                const orderCode = orderId.slice(5, orderId.length)
                if (orderCode === code) {
                    order.splice(index, 1)
                    totalPrice.textContent = calculateCost()
                    button.parentElement.remove()
                    productsNumber.textContent = order.length

                    console.log("El producto ha sido eliminado de su pedido. Su pedido es:")
                    return seeOrder()
                }
            }
        }
    }
    return "EL pedido no existe"
}