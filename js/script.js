
let products = [];
let cart = [];

async function fetchProducts() {
  const container = document.getElementById("products-container");
  container.innerHTML = "<p>Loading products...</p>";

  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    products = data.products;
    displayProducts(products);
  } catch (error) {
    container.innerHTML = "<p>Failed to load products. Please try again.</p>";
    console.error("API Error:", error);
  }
}

function displayProducts(productList) {
  const container = document.getElementById("products-container");
  container.innerHTML = "";
  productList.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.thumbnail}" alt="${product.title}" />
      <h4>${product.title}</h4>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    container.appendChild(card);
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  document.getElementById("cart-count").textContent = cart.length;
}

function filterByCategory() {
  const selected = document.getElementById("category-select").value;
  if (selected === "all") {
    displayProducts(products);
  } else {
    const filtered = products.filter(p => p.category.toLowerCase() === selected.toLowerCase());
    displayProducts(filtered);
  }
}

window.onload = fetchProducts;
