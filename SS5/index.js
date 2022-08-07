let products = [
    {
        name: 'Pho',
        title: 'Day la mon an co truyen cua Ha Noi va Viet Nam',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae eaque consectetur voluptates amet rem cum commodi distinctio iure? Animi nulla repellat hic? Voluptatum totam iusto eaque deleniti officiis nemo?',
        img: './Imagine/item-picture1.webp'
    },
    {
        name: 'Bun rieu',
        title: 'Day la mon an tuyet voi va rat thich hop de di an voi nguoi yeu',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae eaque consectetur voluptates amet rem cum commodi distinctio iure? Animi nulla repellat hic? Voluptatum totam iusto eaque deleniti officiis nemo?',
        img: './Imagine/item-picture1.webp'
    },
    {
        name: 'Banh da cua',
        title: 'Day la mot mon sieu ngon cua HaiPhong',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae eaque consectetur voluptates amet rem cum commodi distinctio iure? Animi nulla repellat hic? Voluptatum totam iusto eaque deleniti officiis nemo?',
        img: './Imagine/item-picture1.webp'
    },
    {
        name: 'Bun bo Hue',
        title: 'Mon ngon cua Hue',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae eaque consectetur voluptates amet rem cum commodi distinctio iure? Animi nulla repellat hic? Voluptatum totam iusto eaque deleniti officiis nemo?',
        img: './Imagine/item-picture1.webp'
    },
    {
        name: 'Banh bot loc',
        title: 'Mon ngon dac san cua Hue',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae eaque consectetur voluptates amet rem cum commodi distinctio iure? Animi nulla repellat hic? Voluptatum totam iusto eaque deleniti officiis nemo?',
        img: './Imagine/item-picture1.webp'
    },
    {
        name: 'Bun oc ',
        title: 'Mot mon ngon va dinh cao vao mua dong',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae eaque consectetur voluptates amet rem cum commodi distinctio iure? Animi nulla repellat hic? Voluptatum totam iusto eaque deleniti officiis nemo?',
        img: './Imagine/item-picture1.webp'
    },
]
let productsCart = []
let productsCartString = JSON.stringify(productsCart)
// Chuyển về kiểu dữ liệu để lưu trữ

localStorage.setItem('productsCart', productsCartString)

let productsString = JSON.stringify(products)
console.log(productsString)

let productsData = localStorage.getItem('products')

let items = document.querySelector('.items')
// Lấy dữ liệu từ class items đầu tiên

for (product of products) {
    items.innerHTML+= `
    <div class="item">
    <div class="product-view">
        <img class = "img-icon" src='${product.img} 'alt=""></img>
        <button type="input value= '${product.name}'>add to list</button>
    </div>
    <div class="content">
        <h3>${product.name}</h3>
        <p>
            ${product.title}
        </p>
    </div>
    `
}
let item = document.querySelector('.items')
let cart = document.querySelector('.container-right')
let cartParse = JSON.parse(localStorage.getItem('productsCart'))

console.log('cartParse, cartParse')

for(food of cartParse){
    cart.innerHTML += `<p>${food}</p>`
}

item.addEventListener('click', function(event){
    if (event. srcElement.tagName === 'Button'){
        let item = event.srcElement.value
        console.log('item', item)
        cartParse.push(`${item}`)
        localStorage.setItem('productsCart', JSON.stringify(cartParse))
        cart.innerHTML += `<p>${item}</p>`
    }
})

// JSON.parse >< JSON.stringify