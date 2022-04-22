// prettier-ignore
let poops = [
    {
      "title": "Kal tvoey mamashi",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "img": "http://via.placeholder.com/150x150",
      "quantity": 2000,
      "price": 108,
    },
    {
        "title": "Drisnya 9000",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "img": "http://via.placeholder.com/150x150",
        "quantity": 1765,
        "price": 100,
      },
      {
        "title": "Podliva",
        "description": "5656Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "img": "http://via.placeholder.com/150x150",
        "quantity": 10,
        "price": 223,
      },
      {
        "title": "Drisnya",
        "description": "12Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "img": "http://via.placeholder.com/150x150",
        "quantity": 987,
        "price": 2223,
      },
      {
        "title": "Zhizha Zhizhi",
        "description": "343Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "img": "http://via.placeholder.com/150x150",
        "quantity": 1488,
        "price": 666,
      },
      {
        "title": "Govna pyatno",
        "description": "444Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "img": "http://via.placeholder.com/150x150",
        "quantity": 999,
        "price": 999,
      },
]

function renderCatalogProducts() {
    var productsHTML = getProductsHTML()
    let parentNode = document.getElementById('product-grid')
    parentNode.innerHTML = productsHTML
}

function getProductsHTML() {
    let productsHTML = ''
    poops.forEach(function (product) {
        let template = `<div class="product-item">
        <div class="product-item-h1">${product.title}</div>
        <img src="${product.img}" />
        <div class="product-item-p">${product.description}</div>
        <span class="quantity">${product.quantity} gr</span>
        <span class="cost">${product.price} $</span>
        <a href="/cart.html" class="tocartbutton">ADD to cart</a>
        </div>`
        productsHTML += template
    })
    return productsHTML
}

renderCatalogProducts()
