const products = document.getElementById("products");

fetch("https://dummyjson.com/products/category/smartphones")
  .then(response => response.json())
  .then(data => {
    data.products.forEach(product => {
      products.innerHTML += `
        <div class="card">
          <img src="${product.thumbnail}" alt="${product.title}">
          <h3>${product.title}</h3>
          <p class="price">$${product.price}</p>
          <button class="cart-btn">Add to Cart</button>
        </div>
      `;
    });
  })
  .catch(error => console.log(error));