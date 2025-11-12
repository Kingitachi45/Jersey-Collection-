const cart = JSON.parse(localStorage.getItem('cart')) || [];

function displayCart() {
    const itemsDiv = document.getElementById('cart-items');
    itemsDiv.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
        const div = document.createElement('div');
        div.innerHTML = `${item.name} - $${item.price} x ${item.qty} <button onclick="removeItem(${index})">Remove</button>`;
        itemsDiv.appendChild(div);
        total += item.price * item.qty;
    });
    document.getElementById('total').textContent = `Total: $${total}`;
    localStorage.setItem('cart', JSON.stringify(cart));
}

function removeItem(index) {
    cart.splice(index, 1);
    displayCart();
}

displayCart();

document.getElementById('checkoutBtn').addEventListener('click', () => {
    window.location.href = 'checkout.html';
});