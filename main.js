 document.getElementById('loginbtnId').addEventListener("click", function() {
     const loginContainer = document.getElementById('loginId');
     loginContainer.style.display = 'none';
     const dashContainer = document.getElementById('dashboardId');
     dashContainer.style.display = 'block';
 });

 //  input function
 function getInputNumber(id) {
     const Amount = document.getElementById(id).value;
     const amountNumber = parseFloat(Amount);
     return amountNumber;
 }
 //  deposit code :

 document.getElementById("depositBtn").addEventListener("click", function() {

     const depositNumber = getInputNumber("depositAmount");
     const currentDeposit = document.getElementById("currentDeposit").innerText;
     const currentDepositNumber = parseFloat(currentDeposit);
     //  const totalDeposit = depositNumber + currentDepositNumber;
     //  document.getElementById('currentDeposit').innerText = totalDeposit;

     updateSpanText("currentDeposit", depositNumber)
     updateSpanText("currentBalance", depositNumber)
     document.getElementById("depositAmount").value = '';

 })

 //  balance code & deposit code (same function):
 function updateSpanText(id, depositNumber) {
     const current = document.getElementById(id).innerText;
     const currentNumber = parseFloat(current);
     const totalAmount = depositNumber + currentNumber;
     document.getElementById(id).innerText = totalAmount;
 }

 // withdraw code :

 document.getElementById("withdrawBtn").addEventListener("click", function() {

     const withdrawNumber = getInputNumber("withdrawAmount");;
     const currentWithdraw = document.getElementById("currentWithdraw").innerText;
     const currentWithdrawNumber = parseFloat(currentWithdraw);
     //  const totalWithdraw = withdrawNumber + currentWithdrawNumber;
     //  document.getElementById('currentWithdraw').innerText = totalWithdraw;
     updateSpanText("currentWithdraw", withdrawNumber);
     updateSpanText("currentBalance", withdrawNumber * -1);
     document.getElementById("withdrawAmount").value = '';

 })