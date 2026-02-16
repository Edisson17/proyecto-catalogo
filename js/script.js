let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    renderCart();
}

function removeItem(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    renderCart();
}

function renderCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const totalElement = document.getElementById('cart-total');
    
    // Si está vacío
    if (cart.length === 0) {
        cartItemsElement.innerHTML = '<p class="empty-msg">El carrito está vacío.</p>';
    } else {
        cartItemsElement.innerHTML = '';
        cart.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'cart-item';
            itemDiv.innerHTML = `
                <span>${item.name}</span>
                <span>$${item.price} <button onclick="removeItem(${index})" style="margin-left:10px; color:red; cursor:pointer; border:none; background:none;">✕</button></span>
            `;
            cartItemsElement.appendChild(itemDiv);
        });
    }
    
    totalElement.innerText = total.toLocaleString(); // Formato con comas si es necesario
}

function checkout() {
    if (cart.length > 0) {
        alert(`🛍️ ¡Pedido procesado!\nTotal a pagar: $${total}\nGracias por confiar en TechLaptop.`);
        cart = [];
        total = 0;
        renderCart();
    } else {
        alert("Agrega al menos una laptop para comprar.");
    }
}