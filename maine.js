let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');

// حساب اجمالى سعر المنتج
function getTotal() {
    if (price.value > 0) {
        total.innerHTML = (+price.value + +taxes.value + +ads.value )- +discount.value;
        total.style.background = 'green';
    }else {
        total.innerHTML = 'Enter a valid';
        total.style.background = 'red';
    }
}

// safe a products to local storage (تخزين البيانات) 
let dataProducts;
if (localStorage.products != null) {
    dataProducts = JSON.parse(localStorage.products);
}else {
    dataProducts = [];
}
// انشاءعنصر
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
    localStorage.setItem("products", JSON.stringify(dataProducts));
    clearData();
    showData();
}
// Clear Data
function clearData() {
    title.value = '';
    price.value = '';
    taxes.value = '';
    ads.value = '';
    discount.value = '';
    total.innerHTML = 'Enter the value';
    count.value = '';
    category.value = '';
}
//Read
function showData() {
    let table='';
    for (let i = 0; i < dataProducts.length; i++) {
        table += `
        <tr>
            <td>${i}</td>
            <td>${dataProducts[i].title}</td>
            <td>${dataProducts[i].price}</td>
            <td>${dataProducts[i].taxes}</td>
            <td>${dataProducts[i].ads}</td>
            <td>${dataProducts[i].discount}</td>
            <td>${dataProducts[i].total}</td>
            <td><button id="update">update</button></td>
            <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
        </tr>`

    }
    document.getElementById('table').innerHTML = table;
}

//delete
function deleteData(i) {
    dataProducts.splice(i, 1);
    localStorage.products = JSON.stringify(dataProducts);
    showData();
}
// function deleteAll() {
//     dataProducts = [];
//     localStorage.products = JSON.parse(dataProducts);
//     showData();
// }
