let products = JSON.parse(localStorage.getItem("products")) || [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderProducts() {
  let box = document.getElementById("products");
  if (!box) return;
  box.innerHTML = "";
  products.forEach((p, i) => {
    box.innerHTML += `
      <div class="card">
        <img src="${p.img}" width="150">
        <h4>${p.name}</h4>
        <p>₹${p.price}</p>
        <p>${p.eco}</p>
        <button onclick="addToCart(${i})">Add to Cart</button>
      </div>`;
  });
}

function addToCart(i) {
  cart.push(products[i]);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart 🌱");
}

function adminLogin() {
  if (aid.value === "Maitree29" && apass.value === "001") {
    adminPanel.classList.remove("hidden");
  } else {
    alert("Wrong Admin Credentials");
  }
}

function addProduct() {
  products.push({
    name: pname.value,
    price: pprice.value,
    eco: peco.value,
    img: pimg.value
  });
  localStorage.setItem("products", JSON.stringify(products));
  alert("Product Added");
}

renderProducts();
