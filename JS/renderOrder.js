"use strict";

/**
 * 
 */
const renderOrder = (name, code, cost) => {
    const   orderList = document.getElementById("order-list")
    const   order = document.createElement("li"),
            nameOrder = document.createElement("h3"),
            codeOrder = document.createElement("span"),
            costOrder = document.createElement("span"),
            deleteOrder = document.createElement("button")

    order.id = `prod-${code}`
    order.classList.add("order")

    nameOrder.classList.add("title")
    nameOrder.textContent = name
    
    codeOrder.textContent = code
    costOrder.textContent = `${cost}$`

    deleteOrder.classList.add("delete-order")
    deleteOrder.textContent = "-"


    orderList.appendChild(order)

    order.appendChild(nameOrder)
    order.appendChild(codeOrder)
    order.appendChild(costOrder)
    order.appendChild(deleteOrder)

    buttonCanDeleteOrder(deleteOrder)
    
}

// Funcion que permite que un boton del pedido de la interfaz de usuario
// tenga la habilidad de eliminar un pedido

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
                console.log(order.length)
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