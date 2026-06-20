document.getElementById("addMoney-btn").addEventListener("click",function(){

    const selectBank=document.getElementById("selectBank").value;
    if(selectBank=="Select Bank")
    {
        alert("please select a bank");
        return;
    }






const agentNumber=document.getElementById("addMoneyAgentNum").value;
if(agentNumber.length!=11){
    alert("invalid agent number");
    return;
}

const amount=document.getElementById("add-amount").value;
console.log(amount);
const availableBalance=document.getElementById("availableBalance").innerText;

const newBalance=Number(availableBalance)+Number(amount);
const pin=document.getElementById("addPin").value;
if(pin=="1234"){
    const balance=document.getElementById("availableBalance");
    balance.innerText=newBalance;
    alert( `${amount} is added successfully
         ${new Date}`);

const newElement = document.createElement('div');

newElement.innerHTML = `
    <h1>
        ${amount} is added successfully <br>
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