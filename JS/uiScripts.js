"use strict";
/**
 * Logica de la interfaz para agregar pedidos y cobrar
 */

addEventListener("DOMContentLoaded", loadJS)

function loadJS() {
    const orderProductBtn = Array.from(document.querySelectorAll(".orderProductBtn"))

    orderProductBtn.map(button => {
        button.addEventListener("click", () => {
            const productFound = products.find(prod => prod.code === button.id)

            order.push(productFound)
            renderProduct(productFound.name, productFound.code, productFound.cost)

            const deleteProdBtn = document.querySelectorAll(".delete-product")

            for (const btn of deleteProdBtn) {
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

    const renderProduct = (name, code, cost) => {
        const   orderList = document.getElementById("order-list")
        const   order = document.createElement("li"),
                nameProd = document.createElement("h3"),
                codeProd = document.createElement("span"),
                costProd = document.createElement("span"),
                deleteProd = document.createElement("button")

        order.id = `prod-${code}`
        order.classList.add("order")

        nameProd.classList.add("title")
        nameProd.textContent = name
        
        codeProd.textContent = code
        costProd.textContent = `${cost}$`

        deleteProd.classList.add("delete-product")
        deleteProd.textContent = "-"


        order.innerHTML = `
            ${nameProd.outerHTML}
            ${codeProd.outerHTML}
            ${costProd.outerHTML}
            ${deleteProd.outerHTML}
        `
        orderList.appendChild(order)

    }

}