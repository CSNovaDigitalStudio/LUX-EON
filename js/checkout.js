const cartToggle =
document.getElementById("cartToggle");

const closeCart =
document.getElementById("closeCart");

const cartDrawer =
document.querySelector(".cart-drawer");

const cartOverlay =
document.querySelector(".cart-overlay");

if(
    cartToggle &&
    closeCart &&
    cartDrawer &&
    cartOverlay
){

    cartToggle.addEventListener("click", e=>{

        e.preventDefault();

        cartDrawer.classList.add("active");
        cartOverlay.classList.add("active");

    });

    closeCart.addEventListener("click", ()=>{

        cartDrawer.classList.remove("active");
        cartOverlay.classList.remove("active");

    });

    cartOverlay.addEventListener("click", ()=>{

        cartDrawer.classList.remove("active");
        cartOverlay.classList.remove("active");

    });

}

const cart =
JSON.parse(
localStorage.getItem("cart")
) || [];

const orderSummary =
document.getElementById("orderSummary");

if(orderSummary){

    let total = 0;

    orderSummary.innerHTML = "";

    cart.forEach(item=>{

        total += item.price;

        orderSummary.innerHTML += `
            <div class="checkout-item">

                <span>${item.name}</span>

                <span>R${item.price}</span>

            </div>
        `;
    });

    orderSummary.innerHTML = `
        <h2>Your Order</h2>
        ${orderSummary.innerHTML}

        <div class="order-total">
            <h3>Total</h3>
            <span>R${total}</span>
        </div>
    `;
}

const form =
document.getElementById("checkoutForm");

if(form){

form.addEventListener("submit", e=>{

    e.preventDefault();

    const name =
    form.querySelectorAll("input")[0].value;

    const email =
    form.querySelectorAll("input")[1].value;

    const phone =
    form.querySelectorAll("input")[2].value;

    const address =
    form.querySelectorAll("input")[3].value;

    let orderText = "";

    cart.forEach(item=>{

        orderText +=
        `${item.name} - R${item.price}\n`;

    });

    const total =
    cart.reduce(
        (sum,item)=>sum+item.price,
        0
    );

    const message = encodeURIComponent(

`NEW ORDER

Name: ${name}
Email: ${email}
Phone: ${phone}
Address: ${address}

Items:
${orderText}

Total: R${total}`

    );

    window.open(
    `https://wa.me/27639561729?text=${message}`
    );

});
}