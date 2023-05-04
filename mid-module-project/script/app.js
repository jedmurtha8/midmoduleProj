/*
    app.js

*/

function makeCard(product) {

    const article = document.createElement("article");
    article.classList.add("product-card");

    const html = `
            <div class="sku">${product.productSku}</div>
            <div class="price">${'$' + product.price}</div>
            <div class="product-name action" data-id="${product.productId}">${product.name}</div>
            <div class="product-image">
              <img src="${product.imageName}">
            </div>
            <div class="cart">
               <i class="fa-solid fa-cart-plus icon action" title="Add item to cart"></i>
            </div> 
    
    `
    article.innerHTML = html;
    return article;
}

document.addEventListener('DOMContentLoaded', () => {
    // const p = [{sku: 'sku-001', price: 1.99, id: 5, description: 'Hello world', image: 'https://via.placeholder.com/350x250.jpg'},

    // {sku: 'sku-002', price: 1.99, id: 5, description: 'Hello world', image: 'https://via.placeholder.com/350x250.jpg'},
    // {sku: 'sku-003', price: 1.99, id: 5, description: 'Hello world', image: 'https://via.placeholder.com/350x250.jpg'},
    // {sku: 'sku-004', price: 1.99, id: 5, description: 'Hello world', image: 'https://via.placeholder.com/350x250.jpg'}
    // ];
    productService.getProducts().forEach((item) => {
        const element = makeCard(item);
        const cardSection = document.getElementById('product-cards');
        cardSection.appendChild(element);
    });

    const nameClick = document.querySelectorAll('.product-name');
    nameClick.forEach((element) => {
        element.addEventListener('click', displayInfo);
    });

    const cartIcon = document.querySelectorAll('.cart');
    cartIcon.forEach((i) => {
        i.addEventListener('click', addToCart);
    });

    const searchBar = document.querySelectorAll('.searchContainer');
    searchBar.addEventListener('keyup', searchProducts);

});

function displayInfo(temp) {
    const id = Number(temp.currentTarget.getAttribute("data-id"));
    const p = productService.allProducts;
    p.forEach((element) => {
        if (element.productId === id) {
            window.alert("Description: " + element.description);
        }
    });
}

function addToCart(temp) {
    const id = Number(temp.currentTarget.getAttribute("data-id"));
    window.alert('Item added to cart!');
}
