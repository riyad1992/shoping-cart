function updateInput(product, isIncrease, priceValue, price){
    let productInput = document.getElementById(product);
    let productNumber = productInput.value
    if(isIncrease){
        productNumber = parseInt(productNumber) + 1
    }
    else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    let phonePrice = document.getElementById(priceValue);
    let phoneTotalPrice = parseFloat(productInput.value) * price
    phonePrice.innerText = phoneTotalPrice;
    calculateTotal()
}

function getInputValue(product){
    let inputTotal =  document.getElementById(product);
    let totalValuePrice = parseInt(inputTotal.value);
    return totalValuePrice;
}

function calculateTotal (){
    let totalPhonePrice = getInputValue('phone-count') * 1219;
    let totalCasePrice = getInputValue('case-count') * 59;
    let subTotal = totalPhonePrice + totalCasePrice;
    let taxTotal = subTotal / 10;
    let total = subTotal + taxTotal;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = taxTotal;
    document.getElementById('total').innerText = total;
}

document.getElementById('phone-count-decrease').addEventListener('click', function(){
    updateInput('phone-count', false, 'phone-price', 1219)
})

document.getElementById('phone-count-increase').addEventListener('click', function(){
    updateInput('phone-count', true, 'phone-price', 1219)
})

document.getElementById('case-decrease').addEventListener('click', function(){
    updateInput('case-count', false, 'case-price', 59)
})

document.getElementById('case-increase').addEventListener('click', function(){
    updateInput('case-count', true, 'case-price', 59)
})

function removeItem(){
    let items = document.getElementsByClassName('remove-item');
    for(let item of items){
        item.parentNode.parentNode.parentNode.remove()
    }
}