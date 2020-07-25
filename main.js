// Increament quantity
function totalPositiveQuantity(id){
    const quantity = document.getElementById(id).value;
    const quantityNumber = parseInt(quantity);
    const total= quantityNumber + 1;
    return total;
}

// Decreament quantity
function totalNegativeQuantity(id){
    const quantity = document.getElementById(id).value;
    const quantityNumber = parseInt(quantity);
    let total = 0;
    if(quantityNumber>0)
        total = quantityNumber - 1;
    return total;
}

// update price of Mobile Or MobileCase
function updatePrice(price,quantity){
    const totalPriceNumber = price * quantity;
    return totalPriceNumber;
}


// Update Subtotal when plus button clicked 
function updateIncreaseSubtotal(Price){
    let subTotalPrice = document.getElementById('subTotal').innerText;
    const subTotalPriceNumber = parseInt(subTotalPrice);
    subTotalPrice = subTotalPriceNumber + Price;
    document.getElementById('subTotal').innerText = subTotalPrice;
    return subTotalPrice;
}

// Update Subtotal when minus button clicked 
function updateDecreaseSubtotal(Price){
    let subTotalPrice = document.getElementById('subTotal').innerText;
    const subTotalPriceNumber = parseInt(subTotalPrice);
    subTotalPrice = subTotalPriceNumber - Price;
    document.getElementById('subTotal').innerText = subTotalPrice;
    return subTotalPrice;
}

//Update totalPrice
function updateTotalPrice(subTotal){
    tax = document.getElementById('tax').innerText;
    tax = parseInt(tax);
    return subTotal + tax;
}



const mobilePrice = parseInt(document.getElementById('mobilePrice').innerText);
const mobileCasePrice = parseInt(document.getElementById('mobileCasePrice').innerText);



// plus Button Event Handler for Mobile
 const mobilePlusBtn = document.getElementById('mobilePlusBtn');
 mobilePlusBtn.addEventListener('click',function(){
    const quantityOfMobile = totalPositiveQuantity('quantityOfMobile');
    document.getElementById('quantityOfMobile').value = quantityOfMobile;
    const totalMobilePrice = updatePrice(mobilePrice,quantityOfMobile);
    document.getElementById('mobilePrice').innerText = totalMobilePrice;
    const subTotal = updateIncreaseSubtotal(mobilePrice);
    const totalPrice = updateTotalPrice(subTotal);
    document.getElementById('totalPrice').innerText = totalPrice;
})

// minus Button Event Handler for Mobile
const mobileMinusBtn = document.getElementById('mobileMinusBtn');
mobileMinusBtn.addEventListener('click',function(){
    const quantityOfMobile = totalNegativeQuantity('quantityOfMobile');
    document.getElementById('quantityOfMobile').value = quantityOfMobile;
    const totalMobilePrice = updatePrice(mobilePrice,quantityOfMobile);
    document.getElementById('mobilePrice').innerText = totalMobilePrice;
    const subTotal = updateDecreaseSubtotal(mobilePrice);
    const totalPrice = updateTotalPrice(subTotal);
    document.getElementById('totalPrice').innerText = totalPrice;   
})

// plus Button Event Handler for MobileCase
const mobileCasePlusBtn = document.getElementById('mobileCasePlusBtn');
mobileCasePlusBtn.addEventListener('click',function(){
    const quantityOfMobileCase = totalPositiveQuantity('quantityOfMobileCase');
    document.getElementById('quantityOfMobileCase').value = quantityOfMobileCase;
    const totalMobileCasePrice = updatePrice(mobileCasePrice,quantityOfMobileCase);
    document.getElementById('mobileCasePrice').innerText = totalMobileCasePrice;
    const subTotal = updateIncreaseSubtotal(mobileCasePrice);
    const totalPrice = updateTotalPrice(subTotal);
    document.getElementById('totalPrice').innerText = totalPrice;
})


// Minus Button Event Handler for MobileCase
const mobileMinusCaseBtn = document.getElementById('mobileMinusCaseBtn');
mobileMinusCaseBtn.addEventListener('click',function(){
    const quantityOfMobileCase = totalNegativeQuantity('quantityOfMobileCase');
    document.getElementById('quantityOfMobileCase').value = quantityOfMobileCase;
    const totalMobileCasePrice = updatePrice(mobileCasePrice,quantityOfMobileCase);
    document.getElementById('mobileCasePrice').innerText = totalMobileCasePrice;    
    const subTotal =  updateDecreaseSubtotal(mobileCasePrice);
    const totalPrice = updateTotalPrice(subTotal);
    document.getElementById('totalPrice').innerText = totalPrice;
})

const checkOutBtn = document.getElementById('checkOutBtn').addEventListener('click',function(){
    alert('Are you want to visit checkout page?');
})