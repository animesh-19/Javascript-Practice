function fetchProducts() {
    fetch('https://fakestoreapi.com/products')
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch products");
            }
            return response.json();
        })
        .then(products => {
            console.log(products);
        })
        .catch(error => {
            console.log("Error:", error);
        });
}

fetchProducts();




async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');

        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        const products = await response.json();

        console.log(products);

    } catch (error) {
        console.log("Error:", error);
    }
}

fetchProducts();

//fetch only the first product 

async function fetchProduct() {
    try {
        const response = await fetch('https://fakestoreapi.com/products/1');

        const product = await response.json();

        console.log("Title:", product.title);
        console.log("Price:", product.price);
    }
    catch(error) {
        console.log(error);
    }
}

fetchProduct();


async function getProducts() {
    try {
        const response = await fetch('https://dummyjson.com/products');

        const data = await response.json();

        console.log(data.products);

    } catch (error) {
        console.log(error);
    }
}

getProducts();


async function getProduct() {
    try {
        const response = await fetch('https://dummyjson.com/products/1');

        const product = await response.json();

        console.log(product);
    }
    catch(error) {
        console.log(error);
    }
}

getProduct();


