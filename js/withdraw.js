document.getElementById('withdawBtn').addEventListener('click',function(){
    //get withdraw amount from the input field
    const withdrawAmountField = document.getElementById('withdrawAmount')
const newWithdrawAmount = parseFloat(withdrawAmountField.value);
withdrawAmountField.value ='' ;
if(isNaN(newWithdrawAmount)){
    alert('please provide a valid number ')
    return
}
//get the total deposit
const withdrawTotalAmount= document.getElementById('withdrawTotal')
const previousWithdrawTotal = parseFloat(withdrawTotalAmount.innerText) ;




// get balance 
const balanceTotalAmount= document.getElementById('balanceTotal')
const previousBalanceTotal = parseFloat(balanceTotalAmount.innerText) ;
withdrawAmountField.value ='' ;

if(newWithdrawAmount > previousBalanceTotal){
    alert('you dont have enough money')
    return
}


//update the deposite amount
const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
withdrawTotalAmount.innerText = currentWithdrawTotal;

// update final balance
const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
balanceTotalAmount.innerText = currentBalanceTotal;

//clear field
withdrawAmountField.value ='' ;

})