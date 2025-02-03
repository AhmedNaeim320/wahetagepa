// تعريف المتغير لتخزين المجموع الكلي
let totalPrice = 0;

// إضافة صنف إلى الفاتورة عند اختيار المستخدم من القائمة
function addToInvoice() {
    const itemSelect = document.getElementById('item');
    const quantityInput = document.getElementById('quantity');
    
    const itemName = itemSelect.value;
    const itemPrice = parseInt(itemSelect.options[itemSelect.selectedIndex].getAttribute('data-price'));
    const quantity = parseInt(quantityInput.value);

    const itemTotalPrice = itemPrice * quantity;

    // إضافة الصنف إلى جدول الفاتورة
    const tableBody = document.querySelector('#invoiceTable tbody');
    const newRow = tableBody.insertRow();
    newRow.innerHTML = `
        <td>${itemName}</td>
        <td>${quantity}</td>
        <td>${itemTotalPrice} جنيه</td>
    `;

    // تحديث المجموع الكلي
    totalPrice += itemTotalPrice;
    document.getElementById('totalPrice').textContent = totalPrice;
}

// إضافة الأصناف الجديدة مع الأزرار المرتبطة بها
document.getElementById('addToInvoiceButton1').addEventListener('click', function() {
    let quantity = document.getElementById('quantity1').value;
    let price = 50;
    let total = price * quantity;
    let row = `<tr><td>مبكبكة ضاني</td><td>${quantity}</td><td>${total} جنيه</td></tr>`;
    document.querySelector('#invoiceTable tbody').insertAdjacentHTML('beforeend', row);
    updateTotalPrice();
});

document.getElementById('addToInvoiceButton2').addEventListener('click', function() {
    let quantity = document.getElementById('quantity2').value;
    let price = 40;
    let total = price * quantity;
    let row = `<tr><td>فراخ على الفحم</td><td>${quantity}</td><td>${total} جنيه</td></tr>`;
    document.querySelector('#invoiceTable tbody').insertAdjacentHTML('beforeend', row);
    updateTotalPrice();
});

document.getElementById('addToInvoiceButton3').addEventListener('click', function() {
    let quantity = document.getElementById('quantity3').value;
    let price = 120;
    let total = price * quantity;
    let row = `<tr><td>كيلو ضاني مندي</td><td>${quantity}</td><td>${total} جنيه</td></tr>`;
    document.querySelector('#invoiceTable tbody').insertAdjacentHTML('beforeend', row);
    updateTotalPrice();
});

// تحديث المجموع الكلي
function updateTotalPrice() {
    let rows = document.querySelectorAll('#invoiceTable tbody tr');
    let totalPrice = 0;
    rows.forEach(row => {
        totalPrice += parseFloat(row.cells[2].innerText.replace(' جنيه', ''));
    });
    document.getElementById('totalPrice').innerText = totalPrice;
}

// مسح الفاتورة
document.getElementById('clearInvoiceButton').addEventListener('click', function() {
    document.querySelector('#invoiceTable tbody').innerHTML = '';
    document.getElementById('totalPrice').innerText = 0;
});
