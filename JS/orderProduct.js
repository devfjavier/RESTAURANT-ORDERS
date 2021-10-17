"user strict";

/**
 * Función que guarda en la lista de pedidos cada producto que se pide
 */
let order = []


const orderProduct = cod => {
    
    // Validar que el dato cod sea string
    if (!cod || typeof cod === "number" || typeof cod === "boolean") return "Ingrese un codigo valido"
    
    const productsNumber = document.getElementById("products-number")
    const totalPrice = document.getElementById("total-price")

    const productFound = products.find(product => (product.code === cod))
    if (!productFound) return "El producto no existe"
    
    order.push(productFound)
    productsNumber.textContent = order.length
    totalPrice.textContent = calculateCost()
    renderOrder(productFound.name, productFound.code, productFound.cost)
    
    console.log("El producto ha sido agregado a su pedido. Su pedido es:")
    return seeOrder()
}

// Funcion que permite ver el pedido por la consola

const seeOrder = () => order

// Funcion que permite que los botones de los productos de la interfaz de usuario
// puedan ordenar un producto

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
