function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
}

function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random
}

document.getElementById('btn-pin-generator').addEventListener('click', function(){
    const pin = getPin();

    const pinField = document.getElementById('pin-field');
    pinField.value = pin;

});

document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typeNumberField = document.getElementById('typeNumber');
    const previousTypeNumber  = typeNumberField.value;
    if(isNaN(number)){
        if(number=== 'C'){
            typeNumberField.value = "";
        }
        else if (number=== '<'){
            const digits = previousTypeNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typeNumberField.value = remainingDigits;
        }
    }
    else{        
        const newTypeNumber = previousTypeNumber + number;
        typeNumberField.value = newTypeNumber;
    }
})

document.getElementById('btn-submit').addEventListener('click', function(){
    const displayPinField = document.getElementById('pin-field');
    const currentPin = displayPinField.value;

    const typeNumberField = document.getElementById('typeNumber');
    const typeNumber  = typeNumberField.value;
    
    const pinSuccessMessage = document.getElementById('pin-success');
    const pinFailureMessage = document.getElementById('pin-failure');

    if(typeNumber === currentPin){
        // console.log('correct pin');
        pinSuccessMessage.style.display= 'block';
        pinFailureMessage.style.display = 'none';
    }
    else{
        // console.log("incorrect pin");
        pinFailureMessage.style.display = 'block';
        pinSuccessMessage.style.display= 'none';
    }
})