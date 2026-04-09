let storeNewProduct = (productData) => {
    let productList = fetchFromStorage() || []; // Fetch the existing products into the product list
    
    productList.push(productData); // Add the new product data to the exisitng list

    saveToStorage(productList); // re-save into storage with the added product
}


// A Function to save product into localStorage
let saveToStorage = (productsData) => {
    localStorage.setItem('products', JSON.stringify(productsData || []))
}

// A function to fetch products from localStorage
let fetchFromStorage = () => {
    let products = JSON.parse(localStorage.getItem('products'));
    return products;
}

let clearProductStorage = () => {
    localStorage.removeItem('products')
}