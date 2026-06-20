document.getElementById("payBill-btn").addEventListener("click",function(){

 const selectBank=document.getElementById("selectBankPay").value;
    if(selectBank=="Select Bank")
    {
        alert("please select a bank");
        return;
    }



    const agentNumber=document.getElementById("billerAgentNum").value;
if(agentNumber.length!=11){
    alert("invalid agent number");
    return;
}

const amount=document.getElementById("bill-amount").value;
console.log(amount);
const availableBalance=document.getElementById("availableBalance").innerText;
console.log(availableBalance);
const newBalance=Number(availableBalance)-Number(amount);
if(newBalance<0){
    alert("not enough money to Pay Bills");
    return;
}

const pin=document.getElementById("billPin").value;
if(pin=="1234"){
    const balance=document.getElementById("availableBalance");
    balance.innerText=newBalance;
     alert( `${amount} is paid successfully
         ${new Date}`);

         const newElement = document.createElement('div');

newElement.innerHTML = `
    <h1>
        ${amount} is paid  successfully <br>
        ${new Date()}
    </h1>
`;
newElement.classList.add(
    "bg-gray-200",
    "p-4",
    "rounded-lg"
);

const transactionHistory=document.getElementById("transaction");
transactionHistory.appendChild(newElement);
}
else{
    alert("Pin doesn't match");
    return;
}


})