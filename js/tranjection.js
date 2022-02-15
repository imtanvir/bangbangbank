// function for all work
document.getElementById('deposit-amount-input-value').focus();
const bankingFunction = function () {
    updateBalenceInInner = document.getElementById("total-current-money-value");
    currentBalence = parseFloat(updateBalenceInInner.innerText);
    return {
        elementIdfinder: function (moneyValue) {
            const moneyVal = document.getElementById(moneyValue);
            return moneyVal;
        },
        valDel: function (inputId) {
            document.getElementById(inputId).value = '';
        }
    }
}
// deposit code 
bankingFunction().elementIdfinder('enter-deposit').addEventListener('click', function () {
            const oldDepoAmount = parseFloat(bankingFunction().elementIdfinder('deposit-money-value').innerText);
            const newDepoAmount = parseFloat(bankingFunction().elementIdfinder('deposit-amount-input-value').value);
            const totalDeposit = (newDepoAmount + oldDepoAmount);
            bankingFunction().elementIdfinder('deposit-money-value').innerText = totalDeposit;
            currentBalence += newDepoAmount;
            updateBalenceInInner.innerText = currentBalence;
            bankingFunction().valDel('deposit-amount-input-value');
        });
// widraw code 
bankingFunction().elementIdfinder('enter-widraw').addEventListener('click', function () {
            const oldwidraw = parseFloat(bankingFunction().elementIdfinder('widraw-money-value').innerText);
            const newWidraw = parseFloat(bankingFunction().elementIdfinder('widraw-amount-input-value').value);
            const totalWidraw = (newWidraw + oldwidraw);
            bankingFunction().elementIdfinder('widraw-money-value').innerText = totalWidraw;
            currentBalence -= newWidraw;
            updateBalenceInInner.innerText = currentBalence;
            bankingFunction().valDel('widraw-amount-input-value');
        });