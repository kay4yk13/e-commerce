// prettier-ignore

const products = [
    {
        id: 0,
        title: 'Kal tvoey mamashi',
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img: 'http://via.placeholder.com/150x150',
        weight: 20,
        price: 108,
    },
    {
        id: 1,
        title: 'Drisnya 9000',
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img: 'http://via.placeholder.com/150x150',
        weight: 15,
        price: 69,
    },
    {
        id: 2,
        title: 'Podliva',
        description:
            "5656Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img: 'http://via.placeholder.com/150x150',
        weight: 50,
        price: 223,
    },
    {
        id: 3,
        title: 'Drisnya',
        description:
            "12Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img: 'http://via.placeholder.com/150x150',
        weight: 75,
        price: 288,
    },
    {
        id: 4,
        title: 'Zhizha Zhizhi',
        description:
            "343Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img: 'http://via.placeholder.com/150x150',
        weight: 100,
        price: 1488,
    },
    {
        id: 5,
        title: 'Govna pyatno',
        description:
            "444Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img: 'http://via.placeholder.com/150x150',
        weight: 20,
        price: 420,
    },
]

//done
function productRenderMethod1() {
    console.log('method1')
    let productsHTML = ''

    products.forEach(function (product) {
        let template = `<div class="product-item">
          <div class="product-item-h1">${product.title}</div>
          <img src="${product.img}" />
          <div class="product-item-p">${product.description}</div>
          <span class="weight">${product.weight} gr</span>
          <span class="cost">${product.price} $</span>
          <a href="cart.html" class="tocartbutton">ADD to cart</a>
          </div>`
        productsHTML += template
    })

    const parentNode = document.getElementById('products-grid')
    parentNode.innerHTML = productsHTML
}

//done
function productRenderMethod2() {
    console.log('method2')
    const parentNode = document.getElementById('products-grid')

    products.forEach((product) => {
        let productNode = document.createElement('div')
        productNode.classList.add('product-item')
        productNode.innerHTML = `
            <div class="product-item-h1">${product.title}</div>
            <img src="${product.img}" />
            <div class="product-item-p">${product.description}</div>
            <span class="weight">${product.weight} gr</span>
            <span class="cost">${product.price} $</span>
            <button class="tocartbutton" onclick="addToCart(${product.id})">ADD TO CART</button>`
        parentNode.appendChild(productNode)
    })
}

//done
function renderCatalogProducts() {
    console.log('rendering catalog')
    if (Math.floor(Math.random() * 14 + 1) % 2 != 0) {
        productRenderMethod1()
    } else {
        productRenderMethod2()
    }
}
// done DETERMINE PAGE
function getPageName() {
    let path = window.location.pathname
    let page = path.split('/').pop().slice(0, -5)
    console.log(page)
    return page
}
// done
function pageSpecificRender() {
    const page = getPageName()
    if (page === 'cart') {
        renderCartTable()
    }
    if (page === 'catalog') {
        renderCatalogProducts()
    }
}

// done TODO 1. define cart const array with 1 element => object:

let cart = [
    {
        product_id: 2,
        quantity: 5,
    },
    {
        product_id: 4,
        quantity: 10,
    },
    {
        product_id: 3,
        quantity: 3,
    },
]

// TODO 2. Find product in products const by id

function getCartProducts() {
    let result = []
    console.log(result)
    cart.forEach((cartItem, index) => {
        result[index] = cart[index]
        result[index].fields = products.find(
            (product) => product.id === cartItem.product_id
        )
    })
    return result
}

//done TODO 3. Dynamically render 1 row html. Without foreach

function getCartProductSubtotal(cartProduct) {
    let result =
        parseInt(cartProduct.fields.price, 10) *
        parseInt(cartProduct.quantity, 10)
    return result
}

function renderCartTable() {
    console.log('rendering cart')
    let cartProducts = getCartProducts()
    let cartTableNode = document.getElementById('cart-table')
    cartProducts.forEach((resultProduct, index) => {
        let cartTableRowNode = document.createElement('div')
        cartTableRowNode.classList.add('cart-item')
        cartTableRowNode.innerHTML = `
            <img src="${cartProducts[index].fields.img}" />
            <div class="cart-product-text">${
                cartProducts[index].fields.title
            }</div>
            <div class="cart-weight">${
                cartProducts[index].fields.weight
            } gr</div>
            <div class="art-table-quantity">${
                cartProducts[index].quantity
            } units</div>
            <div class="cart-cost">${cartProducts[index].fields.price} $</div>
            <div class="cart-totalcost">${getCartProductSubtotal(
                cartProducts[index]
            )} $</div>
            </div>`
        cartTableNode.appendChild(cartTableRowNode)
    })
}

function main() {
    pageSpecificRender()
    // renderСartWidget()
}
main()
