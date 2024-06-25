let cartStorage = localStorage.getItem("cartProducts");

cartStorage = JSON.parse(cartStorage);

let cartContainer = document.getElementById("cart-section");

function renderCarrito(carditems) {
  carditems.forEach((producto) => {
    const cart = document.createElement("div");
    cart.innerHTML = `<h3>${producto.descripcion}</h3>
                          <h4>${producto.precio}</h4>
                          <button type="button" class="btn btn-success" onClick="eliminarProducto(this.id)" id="${producto.id}">Eliminar</button>`;
    cartContainer.appendChild(cart);
  });
}
renderCarrito(cartStorage);

function eliminarProducto(productId) {
  const resultado = cartStorage.filter((producto) => producto.id != productId);
  cartStorage = localStorage.setItem("cartProducts", JSON.stringify(resultado));

  window.location.reload();
}








