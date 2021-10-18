"user strict";

/**
 * Funcion que permite que los botones de los productos del menu puedan ordenar un producto
 */
addEventListener("DOMContentLoaded", () => {
    const orderProductButtons = Array.from(document.querySelectorAll(".order-product"))
    const productsNumber = document.getElementById("products-number")
    const totalPrice = document.getElementById("total-price")
    
    for (const button of orderProductButtons) {
        button.addEventListener("click", () => {
            const productFound = products.find(product => product.code === button.id)

            if (productFound) {
                order.push(productFound)
                totalPrice.textContent = calculateCost()
                productsNumber.textContent = order.length
                console.log("El producto ha sido agregado a su pedido. Su pedido es:")
                renderOrder(productFound.name, productFound.code, productFound.cost)

                console.log(seeOrder())
            }
        })
    }
})
