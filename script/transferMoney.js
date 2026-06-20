document.getElementById("Transfer-btn").addEventListener("click",function(){
const agentNumber=document.getElementById("transferMoneyAgentNum").value;
if(agentNumber.length!=11){
    alert("invalid agent number");
    return;
}

const amount=document.getElementById("transfer-amount").value;
console.log(amount);
const availableBalance=document.getElementById("availableBalance").innerText;
console.log(availableBalance);
const newBalance=Number(availableBalance)-Number(amount);
if(newBalance<0){
    alert("not enough money to Transfer");
    return;
}

const pin=document.getElementById("transferPin").value;
if(pin=="1234"){
    const balance=document.getElementById("availableBalance");
    balance.innerText=newBalance;
    alert("transfer Successful");

    const newElement = document.createElement('div');

newElement.innerHTML = `
    <h1>
        ${amount} is transfered successfully <br>
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