"user strict";

/**
 * Funcion que elimina un pedido ordenado por la consola
 */  
const deleteOrder = code => {
    // Validar que el dato cod sea string
    if (!code || typeof code === "number" || typeof code === "boolean") return "Ingrese un codigo valido"
    const productsNumber = document.getElementById("products-number")
    
    for (const index in order) {
        if (order[index].code === code) {
            const deleteOrderButtons = document.querySelectorAll(".delete-order")

            for (const button of deleteOrderButtons) {
                const orderId = button.parentElement.id
                const orderCode = orderId.slice(5, orderId.length)
                if (orderCode === code) {
                    button.parentElement.remove()
                    order.splice(index, 1)
                    productsNumber.textContent = order.length

                    console.log("El producto ha sido eliminado de su pedido. Su pedido es:")
                    return seeOrder()
                }
            }

            return seeOrder()
        }

        return "EL pedido no existe"
    }
}