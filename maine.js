let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');

function getTotal() {
    if (price.value > 0) {
        total.innerHTML = (+price.value + +taxes.value + +ads.value )- +discount.value;
        total.style.background = 'green';
    }else {
        total.innerHTML = 'Enter a valid';
        total.style.background = 'red';
    }
}

// safe a products to local storage
let dataProducts;
if (localStorage.products != null) {
    dataProducts = JSON.parse(localStorage.products);
}else {
    dataProducts = [];
}

submit.onclick = function () {
    let newProduct = {
        title: title.value,
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        total: total.innerHTML,
        count: count.value,
        category: category.value
    };
    dataProducts.push(newProduct);
    localStorage.setItem('products', JSON.stringify(dataProducts));
    console.log(newProduct);
}