const products = [
  { id: 1, name: "Apple", price: 40, image: "assets/apple.png", category: "fruits" },
  { id: 2, name: "Milk", price: 50, image: "assets/milk.png", category: "dairy" },
  { id: 3, name: "Bread", price: 25, image: "assets/bread.png", category: "bakery" },
  { id: 4, name: "Banana", price: 30, image: "assets/banana.png", category: "fruits" }
];

let cart = [];

function displayProducts(filteredProducts = products) {
  const container = document.getElementById("products-container");
  container.innerHTML = "";
  filteredProducts.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="\${product.image}" alt="\${product.name}" />
      <h4>\${product.name}</h4>
      <p>₹\${product.price}</p>
      <button onclick="addToCart(\${product.id})">Add to Cart</button>
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
    displayProducts();
  } else {
    const filtered = products.filter(p => p.category === selected);
    displayProducts(filtered);
  }
}

window.onload = () => {
  displayProducts();
};
