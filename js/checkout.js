const cartToggle =
document.getElementById("cartToggle");

const closeCart =
document.getElementById("closeCart");

const cartDrawer =
document.querySelector(".cart-drawer");

const cartOverlay =
document.querySelector(".cart-overlay");

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