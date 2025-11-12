document.getElementById('checkoutForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const order = {
        customerName: name,
        email: email,
        address: address,
        items: cart,
        total: total
    };
    localStorage.setItem('lastOrder', JSON.stringify(order));
    localStorage.removeItem('cart');
    window.location.href = 'order_success.html';
});