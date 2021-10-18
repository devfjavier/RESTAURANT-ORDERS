"user strict";

/**
 * Función que guarda en la lista de pedidos cada producto que se pide
 */
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