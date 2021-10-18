"use strict";

/**
 * Funcion que renderiza el producto ordenado en el navegador
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