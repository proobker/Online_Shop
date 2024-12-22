let cartItems = [];
let cartTotal = 0.00;

function addToCart(productName, price) {
    cartItems.push({ name: productName, price: price });
    updateCart();
}

function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    cartItemsElement.innerHTML = '';
    cartItems.forEach(item => {
        const ul = document.createElement('ul');
        ul.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsElement.appendChild(ul);
    });
    cartTotal = cartItems.reduce((total, item) => total + item.price, 0);
    cartTotalElement.textContent = cartTotal.toFixed(2);
}

function scrollToSection() {
    var targetSection = document.getElementById("targetSection");
    targetSection.scrollIntoView({ behavior: 'smooth' });
}

function searchWord() {
    var searchTerm = document.getElementById("searchInput").value.toLowerCase();
    var content = document.getElementById("content");
    var paragraphs = content.getElementsByTagName("h3");
    for (var i = 0; i < paragraphs.length; i++) {
        var paragraphText = paragraphs[i].innerText.toLowerCase();
        if (paragraphText.includes(searchTerm)) {
            paragraphs[i].innerHTML = paragraphText.replace(new RegExp(searchTerm, 'gi'), match => `<span style="background-color: yellow">${match}</span>`);
        }
    }
}

function clearSearch() {
    var content = document.getElementById("content");
    var paragraphs = content.getElementsByTagName("h3");
    for (var i = 0; i < paragraphs.length; i++) {
        paragraphs[i].innerHTML = paragraphs[i].innerText;
    }
    document.getElementById("searchInput").value = "";
}

function showHex() {
    var hex =  document.querySelector("#color_hex_value"),
        form = document.querySelector("form"),
        labels = document.querySelectorAll("label");
    var color = document.querySelector("#color_picker").value;
    labels.forEach(label => {
        label.style.color = color;
    });
}
