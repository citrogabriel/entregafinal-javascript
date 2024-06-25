let productsJson;
let cartProducts;
let cartProductsLS = localStorage.getItem("cartProducts");
if (cartProductsLS) {
  cartProducts = JSON.parse(cartProductsLS);
} else {
  cartProducts = [];
}

let productsContainer = document.getElementById("products-container");

fetch("/Db/data.json")
  .then((response) => response.json())
  .then((data) => {
    productsJson = data;
    data.forEach((products) => {
      const card = document.createElement("div");
      card.innerHTML = `<h3>${products.descripcion}</h3>
                          <h4>${products.precio}</h4>
                          <button type="button" class="btn btn-success" onClick="addToCartButton(this.id)" id="${products.id}">Agregar al carrito</button>`;
      productsContainer.appendChild(card);
    });
  });

function addToCartButton(productId) {
    const selectProduct = productsJson.find((product) => product.id == productId);
    cartProducts.push(selectProduct);
     localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  
     Toastify({
      text: "Agregado",
       duration: 3000,
       destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
       close: true,
      gravity: "top", // `top` or `bottom`
       position: "right", // `left`, `center` or `right`
       stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
         background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
       onClick: function () {}, // Callback after click
    }).showToast();
   }

 


