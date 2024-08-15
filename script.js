// script.js

document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            const productDiv = e.target.closest('.product');
            const name = productDiv.getAttribute('data-name');
            const price = parseFloat(productDiv.getAttribute('data-price'));

            cart.push({ name, price });
            updateCart();
        });
    });

    document.getElementById('checkout').addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Seu carrinho está vazio!');
            return;
        }
        alert('Compra finalizada!');
        cart.length = 0; // Limpa o carrinho
        updateCart();
    });

    function updateCart() {
        cartItemsContainer.innerHTML = '';
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Seu carrinho está vazio.</p>';
        } else {
            let total = 0;
            cart.forEach(item => {
                const itemElement = document.createElement('p');
                itemElement.textContent = `${item.name} - R$${item.price.toFixed(2)}`;
                cartItemsContainer.appendChild(itemElement);
                total += item.price;
            });
            cartTotal.textContent = `Total: R$${total.toFixed(2)}`;
        }
    }
});
