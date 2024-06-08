let cartStorage = localStorage.getItem("cartProducts")


cartStorage = JSON.parse(cartStorage)
console.log(cartStorage)

let cartContainer = document.getElementById("cart-section")

function renderCarrito (carditems) {
    carditems.forEach (producto => {
        const cart = document.createElement("div")
        cart.innerHTML = `<h3>${products.descripcion}</h3>
                          <h4>${products.precio}</h4>`
                          cartContainer.appendChild(cart)


    })
}
renderCarrito(cartStorage)







