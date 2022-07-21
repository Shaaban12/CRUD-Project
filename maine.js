let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');
let btnDelateAll = document.getElementById('delete-all');

// حساب اجمالى سعر المنتج
function getTotal() {
    if (price.value > 0) {
        total.innerHTML = (+price.value + +taxes.value + +ads.value )- +discount.value;
        total.style.background = 'green';
    }else {
        total.innerHTML = 'Enter the valid';
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
submit.onclick =  ()=> {
    let newProduct = {
        title: title.value,
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        total: total.innerHTML,
        count: count.value,
        category: category.value
    }
    // count
    if (newProduct.count > 1){
        for(let i = 0; i < newProduct.count; i++){
            dataProducts.push(newProduct);
        }
    }else {
        dataProducts.push(newProduct);
    }
    // save localstorage
    localStorage.setItem('products', JSON.stringify(dataProducts));
    clearData();
    showData();
}

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
            <td>${dataProducts[i].category}</td>
            <td><button onclick="updateProductData(${i})" id="update">update</button></td>
            <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
        </tr>`;

    }
    document.getElementById('table').innerHTML = table;
    
    // Button delete all 
    if (dataProducts.length > 0){
        btnDelateAll.innerHTML = `
        <button id="BottonDeleteAll" onclick="deleteAll()" >Delete All (${dataProducts.length})</button>`;
    }else {
        btnDelateAll.innerHTML = '';
    }
}

//delete
function deleteData(i) {
    dataProducts.splice(i, 1);
    localStorage.products = JSON.stringify(dataProducts);
    showData();
}

// delete all
function deleteAll() {
    localStorage.clear();
    dataProducts.splice(0);
    showData();
}

// Update
function updateProductData(i) {
    title.value = dataProducts[i].title;
    price.value = dataProducts[i].price;
    taxes.value = dataProducts[i].taxes;
    ads.value = dataProducts[i].ads;
    discount.value = dataProducts[i].discount;
    category.value = dataProducts[i].category;
}

showData();
