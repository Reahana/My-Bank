document.getElementById('depositBtn').addEventListener('click',function(){
    //get deposit amount from the input field
const depositAmountField = document.getElementById('depositAmount')
const newDepositAmount = parseFloat(depositAmountField.value);

//get the total deposit
const depositTotalAmount= document.getElementById('depositTotal')
const previousDepositTotal = parseFloat(depositTotalAmount.innerText) ;

//update the deposite amount
const currentDepositeTotal = previousDepositTotal + newDepositAmount;
depositTotalAmount.innerText = currentDepositeTotal;

// get balance 
const balanceTotalAmount= document.getElementById('balanceTotal')
const previousBalanceTotal = parseFloat(balanceTotalAmount.innerText) ;

// update final balance
const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
balanceTotalAmount.innerText = currentBalanceTotal;

//clear field
depositAmountField.value ='' ;

})