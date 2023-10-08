const inputName = document.querySelector('#name');
const inputAddress = document.querySelector('#address');
const inputPhone = document.querySelector('#phone');
const inputEmail = document.querySelector('#email');
const inputDate = document.querySelector('#date');
const registerButton = document.querySelector('.register');
const sexRadioButton = document.querySelector('.sexInput');
const removeAllButton = document.querySelector('.removeAll')

registerButton.addEventListener('click', register)
removeAllButton.addEventListener('click', removeAll)



function checkName(name) {
  name = (name + "").trim();
  if (name == "") return null;
  return name.length >= 2;
}

function checkPhone(phone) {
  phone = (phone + "").trim();
  if (phone == '') return null;
  return phone.startsWith('0') && !phone.includes('.') && phone.length == 10 && parseInt(phone) && isFinite(phone);
}

function checkAddress(address) {
  address = (address + "").trim();
  return !address == '';
}

function checkDate(date) {
  if (date == '') return null;
  var inputDate = new Date(date);
  var today = new Date();
  today.setHours(0, 0, 0);
  return inputDate >= today;
}

function checkEmail(email) {
  email = (email + "").trim();
  if (email == '') return null;
  return email.endsWith('@gmail.com');
}

function handleError(table) {
  let check = true;
  if (checkName(inputName.value) == null) {
    addRow(table, inputName.parentNode.parentNode.parentNode.rowIndex + 1, "*Họ và tên chưa được điền");
    inputName.classList.add('hasError');
    check = false;
  } else if (!checkName(inputName.value)) {
    addRow(table, inputName.parentNode.parentNode.parentNode.rowIndex + 1, "*Họ và tên chưa hợp lệ");
    inputName.classList.add('hasError');
    check = false;
  }

  if (!checkAddress(inputAddress.value)) {
    addRow(table, inputAddress.parentNode.parentNode.parentNode.rowIndex + 1, "*Địa chỉ chưa dược điền");
    inputAddress.classList.add('hasError');
    check = false;
  }

  if (checkPhone(inputPhone.value) == null) {
    addRow(table, inputPhone.parentNode.parentNode.parentNode.rowIndex + 1, "*Điện thoại chưa dược điền");
    inputPhone.classList.add('hasError');
    check = false;
  } else if (!checkPhone(inputPhone.value)) {
    addRow(table, inputPhone.parentNode.parentNode.parentNode.rowIndex + 1, "*Điện thoại chưa chưa hợp lệ");
    inputPhone.classList.add('hasError');
    check = false;
  }

  if (checkDate(inputDate.value) == null) {
    addRow(table, inputDate.parentNode.parentNode.parentNode.rowIndex + 1, "*Chưa chọn ngày giao hàng");
    inputDate.classList.add('hasError');
    check = false;
  } else if (!checkDate(inputDate.value)) {
    addRow(table, inputDate.parentNode.parentNode.parentNode.rowIndex + 1, "*Ngày giao hàng không hợp lệ");
    inputDate.classList.add('hasError');
    check = false;
  }

  if (checkEmail(inputEmail.value) == null) {
    addRow(table, inputEmail.parentNode.parentNode.parentNode.rowIndex + 1, "*Email chưa được điền");
    inputEmail.classList.add('hasError');
    check = false;
  } else if (!checkEmail(inputEmail.value)) {
    addRow(table, inputEmail.parentNode.parentNode.parentNode.rowIndex + 1, "*Email chưa hợp lệ");
    inputEmail.classList.add('hasError');
    check = false;
  }

  let radioButton = document.querySelector('input[name="sex"]:checked');
  if (radioButton == null) {
    addRow(table, sexRadioButton.parentNode.rowIndex + 1, "*Chưa chọn giới tính");
    check = false;
  }
  return check;
}

function addRow(table, rowIndex, mss) {
  let row = table.insertRow(rowIndex);
  row.classList.add('error');
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell2.innerHTML = mss;
}

function removeError(table) {
  let rowErrors = document.querySelectorAll('.error');
  let inputs = document.querySelectorAll('.hasError');
  for (const row of rowErrors) {
    table.deleteRow(row.rowIndex);
  }
  for (const input of inputs) {
    input.classList.remove('hasError');
  }
}

function addCustomser() {
  let table = document.querySelector('.customerTable');
  let row = table.insertRow(table.length);
  row.classList.add('customerLine');
  var cell1 = row.insertCell(0);
  cell1.classList.add('column1')
  var cell2 = row.insertCell(1);
  cell2.classList.add('column2')
  var cell3 = row.insertCell(2);
  cell3.classList.add('column3')
  var cell4 = row.insertCell(3);
  cell4.classList.add('column4')
  var cell5 = row.insertCell(4);
  cell5.classList.add('column5')
  cell1.innerHTML = inputName.value;
  cell2.innerHTML = document.querySelector('input[name="sex"]:checked').value;
  cell3.innerHTML = inputAddress.value;
  cell4.innerHTML = inputDate.value;

  let products = document.querySelector('.choosenList').querySelectorAll('.productName');
  let string = '';
  for (const product of products) {
    string = string + product.textContent + '; ';
  }
  string = string.substring(0, string.length - 3);
  cell5.innerHTML = string;

}

let storeList = document.querySelector('.storeList');
function product(icon, name, price) {
  this.icon = icon;
  this.name = name;
  this.price = price;
}

let products = [
  new product('📱', 'iPhone 14 Pro Max 256GB', 1349),
  new product('📱', 'Samsung S23 Ultra 256GB', 1089),
  new product('📱', 'iPad Pro M1 11" 128GB', 999),
  new product('📱', 'iPhone 14 Pro 512GB', 849),
  new product('📱', 'iPad Pro M2 12.9" 256GB', 1399),
  new product('💻', 'ASUS ZenBook UX505', 929),
  new product('💻', 'LG Gram 2023 17"', 1049),
  new product('💻', 'DELL XPS 13 9315 (2022)', 1199),
  new product('💻', 'Macbook Pro 16" 2023', 2300),
  new product('💻', 'LG Gram 2021 14"', 729)

]

products.forEach(element => {
  let productIcon = document.createElement('div');
  productIcon.classList.add('productIcon', 'productChild');
  productIcon.innerHTML = element.icon;

  let productName = document.createElement('div');
  productName.classList.add('productName', 'productChild');
  productName.innerHTML = element.name;

  let productPrice = document.createElement('div')
  productPrice.classList.add('productPrice', 'productChild');
  productPrice.innerHTML = `$${element.price}`;

  let productItem = document.createElement('div');
  productItem.classList.add('productItem');
  productItem.append(productIcon);
  productItem.append(productName);
  productItem.append(productPrice);

  storeList.append(productItem)

});

let productItems = document.querySelectorAll('.productItem');
for (const productItem of productItems) {
  productItem.addEventListener('mousedown', productPress);
  productItem.addEventListener('mouseup', productUp);
}
let flag;
let isMouseDownEvent = false;
var startTimeMS = 0;
var timerId;
var timerStep = 90;



let moveRight = document.querySelector('.moveRight');
let moveRightAll = document.querySelector('.moveRightAll');
let moveLeft = document.querySelector('.moveLeft');
let moveLeftAll = document.querySelector('.moveLeftAll');

moveRight.addEventListener('click', moveRightEvent);
moveRightAll.addEventListener('click', moveRightAllEvent);
moveLeft.addEventListener('click', moveLeftEvent);
moveLeftAll.addEventListener('click', moveLeftAllEvent);

