document.getElementById('withdawBtn').addEventListener('click',function(){
    //get withdraw amount from the input field
    const withdrawAmountField = document.getElementById('withdrawAmount')
const newWithdrawAmount = parseFloat(withdrawAmountField.value);

//get the total deposit
const withdrawTotalAmount= document.getElementById('withdrawTotal')
const previousWithdrawTotal = parseFloat(withdrawTotalAmount.innerText) ;

//update the deposite amount
const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
withdrawTotalAmount.innerText = currentWithdrawTotal;


// get balance 
const balanceTotalAmount= document.getElementById('balanceTotal')
const previousBalanceTotal = parseFloat(balanceTotalAmount.innerText) ;

// update final balance
const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
balanceTotalAmount.innerText = currentBalanceTotal;

//clear field
withdrawAmountField.value ='' ;

})