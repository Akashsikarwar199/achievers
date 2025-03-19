let cart = [];
const cartModal = document.getElementById("cart-modal");
const paymentModal = document.getElementById("payment-modal");

document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", function () {
        const product = this.parentElement;
        const name = product.getAttribute("data-name");
        const price = parseFloat(product.getAttribute("data-price"));

        cart.push({ name, price });
        updateCart();
    });
});

document.getElementById("cart").addEventListener("click", () => {
    cartModal.style.display = "block";
    displayCart();
});

document.getElementById("checkout").addEventListener("click", () => {
    paymentModal.style.display = "block";
    document.getElementById("payment-total").innerText = getTotal();
});

document.getElementById("pay").addEventListener("click", () => {
    alert("Payment Successful!");
    cart = [];
    updateCart();
    cartModal.style.display = "none";
    paymentModal.style.display = "none";
});

document.getElementById("close-cart").addEventListener("click", () => {
    cartModal.style.display = "none";
});

document.getElementById("close-payment").addEventListener("click", () => {
    paymentModal.style.display = "none";
});

function updateCart() {
    document.getElementById("cart-count").innerText = cart.length;
}

function displayCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerText = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
    });
    document.getElementById("cart-total").innerText = getTotal();
}

function getTotal() {
    return cart.reduce((sum, item) => sum + item.price, 0);
}
