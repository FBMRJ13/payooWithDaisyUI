document.getElementById("bonus-btn").addEventListener("click",function(){

  


const agentNumber=document.getElementById("BonusAgentNum").value;
if(agentNumber.length!=11){
    alert("invalid Bonus Coupon");
    return;
}


const availableBalance=document.getElementById("availableBalance").innerText;


const newBalance=Number(availableBalance)+Number(100);

    
 const balance=document.getElementById("availableBalance");
    balance.innerText=newBalance;

const newElement = document.createElement('div');

newElement.innerHTML = `
    <h1>
       $100 bouns is added successfully <br>
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



})