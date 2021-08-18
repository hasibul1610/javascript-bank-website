// taking input function 
function gettingInput(inputId){
    const inputBox = document.getElementById(inputId);
    const inputAmountText = inputBox.value ;
    const inputAmount = parseFloat(inputAmountText);

    // clear the value
    inputBox.value ='';

    return inputAmount;

}

// updating the value 
function updateValue(balenceId,inputAmount){
    const currentBalence = document.getElementById(balenceId);
    const balenceText = currentBalence.innerText;

    const previousBalence = parseFloat(balenceText);

    currentBalence.innerText = previousBalence + inputAmount;


}

// get cuurent balence 
function getCurrentBalence(){
    const balenceTotal = document.getElementById('balence-total');
    balenceTotalText = balenceTotal.innerText;
    previousBalenceTotal = parseFloat(balenceTotalText);
    return previousBalenceTotal;

}

function updateBalence(inputAmount,isAdd){
    const balenceTotal = document.getElementById('balence-total');

    const previousBalenceTotal= getCurrentBalence();

    if(isAdd == true){
        balenceTotal.innerText = previousBalenceTotal + inputAmount;
    }
    else{
        balenceTotal.innerText = previousBalenceTotal - inputAmount;
    }
}

// deposit button handler
document.getElementById('deposit-button').addEventListener('click',function(){
    // getting the value
    const depositAmount = gettingInput('deposit-input');
    const currentDepositAmount = updateValue('deposit-balance',depositAmount);

    updateBalence(depositAmount,true);
});

// withdraw button handler
document.getElementById('withdraw-button').addEventListener('click',function(){
    // getting the value
    const withdrawAmount = gettingInput('withdraw-input');
    const currentDepositAmount = updateValue('withdraw-balance',withdrawAmount);

    updateBalence(withdrawAmount,false);
});