const carts = document.querySelector('.cart__products');
const valueButtons = document.querySelectorAll('.product__quantity-control');
const basketAdd = document.querySelectorAll('.product__add');

for (let basket of basketAdd) {
    basket.addEventListener('click',function addToCart(e){
    const product = e.target.closest('.product');
    const id = product.dataset.id;
    const countProduct = +e.target.parentNode.querySelector('.product__quantity-value').innerText;

    const cards = Array.from(document.querySelectorAll('.cart__product'));
    const productInCard = cards.find(el => el.dataset.id == e.target.closest('.product').dataset.id);
    if(productInCard) {
        let basketCount = productInCard.querySelector('.cart__product-count');
        let totalCount = +basketCount.innerText;
        basketCount.innerText = totalCount + countProduct;
    } else {
    const productImg = product.querySelector('.product__image').src;
    const count = product.querySelector('.product__quantity-value').innerText;
    const cartProduct = `<div class="cart__product" data-id="${id}">
                                <img class="cart__product-image" src="${productImg}">
                                <div class="cart__product-count">${count}</div>
                                </div>`;
    carts.insertAdjacentHTML('beforeend', cartProduct);
}
});
}

for (let item of valueButtons) {
    item.addEventListener('click', function changeValue(e){
    let value = e.target.parentNode.querySelector('.product__quantity-value');
    let count = +value.innerText;

    if (e.target.classList.contains('product__quantity-control_inc')) {
        count++;
        value.innerText = count;
    } else {
        if (count > 1) {
            count--;
            value.innerText = count;
        } else {
            value.innerText = 1;
        }
    }
    });
}