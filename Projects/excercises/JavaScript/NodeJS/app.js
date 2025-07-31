// Fetches and logs all products from the server
function showProducts() {
  fetch("http://localhost:3000/products")
    .then((response) => response.json())
    .then((data) => console.log("products succefully acquired", data))
    .catch((error) => console.error("could not fetch the information"));
}

// Adds a new product if it doesn't already exist (by id or name)
function addProduct () {
  const newProduct = { id: "4", name: "PS5", price: 550 };

  fetch("http://localhost:3000/products")
    .then((response) => response.json())
    .then((products) => {
      // Check if product with same id or name exists
      const exists = products.some(
        (p) => p.id === newProduct.id || p.name === newProduct.name
      );
      if (exists) {
        console.log("Product already exists!");
        return;
      }
      // If not exists, add the product
      return fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct)
      });
    })
    .then((response) => {
      if (response && !response.ok)
        throw new Error("Network response was not ok");
      return response ? response.json() : null;
    })
    .then((result) => {
      if (result) console.log("Successfully added:", result);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// Updates the product with id "4" to new values
function changeproduct() {
  const productUpdate = {
      id: "4",
      name:"PS5 pro",
      price: 650
  }

  fetch("http://localhost:3000/products/4", {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(productUpdate),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Failed to update product');
      }
    })
    .then((result) => {
      console.log('Product updated:', result);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}


function deleteProduct() {
  fetch("http://localhost:3000/products/4", {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
        console.log('Product with ID 4 deleted');
      } else {
        console.error('Failed to delete product');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    showProducts()
}

async function main(){
  // Add the functions here
  addProduct()
} 

main()

