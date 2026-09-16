let products = [];

let form = document.getElementById("productForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("productName").value;

    let price = document.getElementById("price").value;

    let category = document.getElementById("category").value;

    let product = {
        name: name,
        price: price,
        category: category
    };

    products.push(product);

    let container = document.getElementById("productContainer");

    container.innerHTML = "";

    products.forEach(function(item) {

        let card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `
            <h3>${item.name}</h3>
            <p>Price: ₹${item.price}</p>
            <p>Category: ${item.category}</p>
        `;

        container.appendChild(card);

    });

    form.reset();

});