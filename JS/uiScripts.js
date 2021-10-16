"use strict";
/**
 * Logica de la interfaz para agregar pedidos y cobrar
 */

addEventListener("DOMContentLoaded", loadJS)

function loadJS() {
    const orderProductButtons = Array.from(document.querySelectorAll(".order-product"))

    orderProductButtons.map(button => {
        button.addEventListener("click", () => {
            const productFound = products.find(prod => prod.code === button.id)

            order.push(productFound)
            renderOrder(productFound.name, productFound.code, productFound.cost)

            const deleteOrderButtons = document.querySelectorAll(".delete-order")

            for (const btn of deleteOrderButtons) {
                btn.addEventListener("click", () => {
                    const lengthId = btn.parentElement.id.length
                    const prodCode = String(btn.parentElement.id.slice(5, lengthId))

                    for (let index = 0; index < order.length; index++) {
                        if (order[index].code === prodCode) {
                            order.splice(index, 1)
                            break;
                        }
                    }
                    btn.parentElement.remove()
                })
            }
        })
    })

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


        order.innerHTML = `
            ${nameOrder.outerHTML}
            ${codeOrder.outerHTML}
            ${costOrder.outerHTML}
            ${deleteOrder.outerHTML}
        `
        orderList.appendChild(order)

    }

}