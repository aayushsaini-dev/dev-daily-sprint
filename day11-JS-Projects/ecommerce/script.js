document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCartMessage = document.getElementById("empty-cart");
  const cartTotalMessage = document.getElementById("cart-total");
  const totalPriceDisplay = document.getElementById("total-price");
  const checkoutBtn = document.getElementById("checkout-btn");


  const products = [
    { id: 1, name: "product 1", price: 25 },
    { id: 2, name: "product 2", price: 50 },
    { id: 3, name: "product 3", price: 75 },
  ];

  let savedCart = JSON.parse(localStorage.getItem("product"));
  let cart = Array.isArray(savedCart) ? savedCart : [];

  renderCart();

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
    <span>${product.name} - $${product.price.toFixed(2)}</span>
    <button data-id = "${product.id}">Add to cart</button>
    `;
    productList.appendChild(productDiv);
  });

  productList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const productId = parseInt(e.target.getAttribute("data-id"));
      const product = products.find((p) => p.id === productId);
      // addToCart(product);
      cart.push(product);
      renderCart();
      saveTasks();
    }
  });

  // function addToCart(product) {
  //   cart.push(product);
  //   renderCart();
  // }

  function renderCart() {
    cartItems.innerText = "";
    let totalPrice = 0;

    if (cart.length > 0) {
      emptyCartMessage.classList.add("hidden");
      cartTotalMessage.classList.remove("hidden");
      // removeBtn.classList.remove("hidden");
      cart.forEach((item, index) => {
        totalPrice += item.price;
        const cartItem = document.createElement("div");
        cartItem.innerHTML = `
            ${item.name} - $${item.price.toFixed(2)}
            <button> remove </button>
            `;
        const removeBtn = cartItem.querySelector("button");
        removeBtn.addEventListener("click", () => {
          cart.splice(index, 1);
          renderCart();
          saveTasks();
        });
        cartItems.appendChild(cartItem);
        totalPriceDisplay.textContent = `${totalPrice.toFixed(2)}`;
      });
    } else {
      emptyCartMessage.classList.remove("hidden");
      totalPriceDisplay.textContent = `$0.00`;
    }
  }

  checkoutBtn.addEventListener("click", () => {
    cart.length = 0;
    localStorage.removeItem("product");
    alert("checkout succesfully");
    renderCart();
  });

  function saveTasks() {
    localStorage.setItem("product", JSON.stringify(cart));
  }
});
