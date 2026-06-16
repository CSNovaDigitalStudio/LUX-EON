const searchInput =
document.getElementById("searchInput");

const sortProducts =
document.getElementById("sortProducts");

const buttons =
document.querySelectorAll("[data-category]");

const products = [

{
id:1,
name:"Niacinamide Serum",
price:120,
category:"serum",
badge:"SALE",
image:"assets/products/niacinamice_serum.jpg"
},

{
id:2,
name:"Extra Strength Peeling Oil",
price:100,
category:"treatment",
badge:"LIMITED",
image:"assets/products/extra_peeling_oil.jpg"
},

{
id:3,
name:"Sunblock Cream SPF 50",
price:100,
category:"cream",
badge:"NEW",
image:"assets/products/sunblock_cream.jpg"
},

{
id:4,
name:"Even Tone Brightening Cream",
price:90,
category:"cream",
badge:"TRENDING",
image:"assets/products/tone_cream.jpg"
},

{
id:5,
name:"Dark Spot Correcting Serum",
price:130,
category:"serum",
badge:"TRENDING",
image:"assets/products/spot_serum.jpg"
},

{
id:6,
name:"Spot Correcting Combo",
price:200,
category:"treatment",
badge:"BESTSELLER",
image:"assets/products/spot_combo.jpg"
},

{
id:7,
name:"Cleanse & Nourish Combo with Turmeric Oil",
price:270,
category:"cleanser",
badge:"NEW",
image:"assets/products/combo_oil.jpg"
},

{
id:21,
name:"Cleanse & Nourish Combo with Carrot Oil",
price:270,
category:"cleanser",
badge:"NEW",
image:"assets/products/combo_oil_c.jpg"
},

{
id:8,
name:"Glow & Brighten Combo with Turmeric Oil",
price:270,
category:"cream",
badge:"LIMITED",
image:"assets/products/glow_oil.jpg"
},

{
id:22,
name:"Glow & Brighten Combo with Carrot Oil",
price:270,
category:"cream",
badge:"LIMITED",
image:"assets/products/glow_oil_c.jpg"
},

{
id:9,
name:"Dark Areas Care Combo with Tumeric Oil",
price:270,
category:"treatment",
badge:"BESTSELLER",
image:"assets/products/dark_t.jpg"
},

{
id:23,
name:"Dark Areas Care Combo with Carrrot Oil",
price:270,
category:"treatment",
badge:"BESTSELLER",
image:"assets/products/dark_c.jpg"
},

{
id:10,
name:"Turmeric & Gulta Lotion",
price:80,
category:"cream",
badge:"BESTSELLER",
image:"assets/products/t.jpg"
},

{
id:11,
name:"Dark Inner Cream",
price:90,
category:"cream",
badge:"BESTSELLER",
image:"assets/products/dark_cream.jpg"
},

{
id:12,
name:"Turmeric Evens Skin Tone Face Serum",
price:100,
category:"serum",
badge:"BESTSELLER",
image:"assets/products/t_face.jpg"
},

{
id:13,
name:"Turmeric Tissue Oil",
price:100,
category:"oil",
badge:"TRENDING",
image:"assets/products/tissue.jpg"
},

{
id:14,
name:"Carrot Oil",
price:100,
category:"oil",
badge:"TRENDING",
image:"assets/products/c.jpg"
},

{
id:15,
name:"Turmeric & Gulta Soap",
price:50,
category:"cleanser",
badge:"NEW",
image:"assets/products/t_soap.jpg"
},

{
id:16,
name:"Turmeric & Gulta Scrub",
price:90,
category:"cleanser",
badge:"NEW",
image:"assets/products/t_scrub.jpg"
},

{
id:20,
name:"Chebe Hairfood (Strength & Shine)",
price:90,
category:"treatment",
badge:"BESTSELLER",
image:"assets/products/c_hair.jpg"
}

];

searchInput.addEventListener("input", () => {

const term =
searchInput.value.toLowerCase();

const filtered =
products.filter(product =>
product.name
.toLowerCase()
.includes(term)
);

renderProducts(filtered);

});

sortProducts.addEventListener("change", () => {

if(sortProducts.value === "low"){

products.sort((a,b)=>
a.price - b.price
);

}

if(sortProducts.value === "high"){

products.sort((a,b)=>
b.price - a.price
);

}

renderProducts(products);

});

buttons.forEach(button => {

button.addEventListener("click", ()=>{

const category =
button.dataset.category;

if(category === "all"){

renderProducts(products);

return;

}

renderProducts(
products.filter(product =>
product.category === category
)
);

});

});

const productGrid = document.getElementById("productGrid");

function renderProducts(items){

    productGrid.innerHTML = "";

    items.forEach(product => {

        productGrid.innerHTML += `
            <div class="product-card">

                <span class="badge">
                    ${product.badge}
                </span>

                <img src="${product.image}" alt="${product.name}">

                <h3>${product.name}</h3>

				<span class="price">
				R ${product.price}
				</span>

				<button
				class="add-cart-btn"
				onclick="addToCart(${product.id})">
				ADD TO CART
				</button>

            </div>
        `;

    });

}

renderProducts(products);

let cart = JSON.parse(
localStorage.getItem("cart")
) || [];

function addToCart(id){

    const product =
    products.find(p => p.id === id);

    cart.push(product);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    updateCart();
}

function updateCart(){

    const cartItems =
    document.getElementById("cartItems");

    const cartCount =
    document.getElementById("cartCount");

    const cartTotal =
    document.getElementById("cartTotal");

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach(item=>{

        total += item.price;

        cartItems.innerHTML += `
        <div class="cart-row">

            <img src="${item.image}">

            <div>
                <h4>${item.name}</h4>
                <span>R ${item.price}</span>
            </div>

        </div>
        `;

    });

    cartCount.textContent =
    cart.length;

    cartTotal.textContent =
    `R ${total}`;
}

updateCart();

const checkoutForm =
document.getElementById("checkoutForm");

if(checkoutForm){

    checkoutForm.addEventListener("submit", e=>{

        e.preventDefault();

        const message =
        encodeURIComponent(
        "Hello Luxeon, I'd like to place my order."
        );

        window.open(
        `https://wa.me/27639561729?text=${message}`
        );

    });

}
