"use strict";
/**
 * Logica de la interfaz para agregar pedidos y cobrar
 */

addEventListener("DOMContentLoaded", loadJS)

function loadJS() {
    const orderProductBtn = Array.from(document.querySelectorAll(".orderProductBtn"))

    orderProductBtn.map((button) => {
        button.addEventListener("click", () => {
            const productFound = products.find(prod => prod.code === button.id)

            order.push(productFound)
            renderProduct(productFound.name, productFound.code, productFound.cost)
        })
    })

    const renderProduct = (name, code, cost) => {
        const   orderList = document.getElementById("order-list")
        const   order = document.createElement("li"),
                nameElement = document.createElement("h3"),
                codeElement = document.createElement("span"),
                costElement= document.createElement("span")

        order.classList.add("order")
        nameElement.classList.add("title")
        nameElement.textContent = name
        codeElement.textContent = code
        costElement.textContent = `${cost}$`

        order.innerHTML = `
            ${nameElement.outerHTML}
            ${codeElement.outerHTML}
            ${costElement.outerHTML}
        `

        orderList.appendChild(order)
    }

}