const cartProducts = document.querySelector(".cart__products");
const addButtons = document.querySelectorAll(".product__add");
const controls = document.querySelectorAll(".product__quantity-controls");

for (let i = 0; i < addButtons.length; i++) {
    addButtons[i].addEventListener('click', (e) => {
        const product = e.target.closest(".product");
        const id = product.dataset.id;
        const html = `
        <div class="cart__product" data-id="${id}">
        <img class="cart__product-image" src="${product.querySelector(".product__image").src}">
        <div class="cart__product-count">${product.querySelector(".product__quantity-value").innerText}</div>
        </div>
        `;
        const cartProduct = cartProducts.querySelectorAll(".cart__product");
        for (let i = 0; i < cartProduct.length; i++) {
            let cartProductCount = cartProduct[i].querySelector(".cart__product-count");
            if (cartProduct[i].dataset.id === id) {            
                cartProductCount.innerText = Number(cartProductCount.innerText) + Number(product.querySelector(".product__quantity-value").innerText);
                return;
            }
        }
        cartProducts.insertAdjacentHTML('beforeEnd', html);  
    });
}

for (let i = 0; i < controls.length; i++) {
    controls[i].addEventListener('click', (e) => {
        let quantityValue = Number(e.currentTarget.querySelector(".product__quantity-value").innerText);
        if (e.target.classList.contains("product__quantity-control_dec")) {
            if (quantityValue > 1) {
                  quantityValue--;
            } else {
                  quantityValue = 1;
            }
        }
        else {
            quantityValue++;
        }
        e.currentTarget.querySelector('.product__quantity-value').innerText = quantityValue;
    });
}