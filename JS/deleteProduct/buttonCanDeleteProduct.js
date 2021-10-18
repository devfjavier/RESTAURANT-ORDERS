"use strict";

/**
 * Funcion que permite que un boton de un producto ordenado tenga la habilidad de eliminar el producto del pedido
 */
const buttonCanDeleteOrder = button => {
    button.addEventListener("click", () => {
        const productsNumber = document.getElementById("products-number")
        const totalPrice = document.getElementById("total-price")
        
        const orderId = button.parentElement.id
        const orderCode = orderId.slice(5, orderId.length)

        for (let index = 0; index < order.length; index++) {
            if (order[index].code === orderCode) {
                button.parentElement.remove()
                order.splice(index, 1)
                totalPrice.textContent = calculateCost() 
                productsNumber.textContent = order.length

                seeOrder().length === 0 ? 
                    console.log("No tiene ningun pedido agregado") : 
                    console.log("El producto ha sido eliminado de su pedido. Su pedido es:")
                console.log(seeOrder())
                break
            }
        }
    })
}