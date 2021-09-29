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
        })
    })

}