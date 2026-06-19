document.getElementById("cashOut-btn").addEventListener("click",function(){
const agentNumber=document.getElementById("agentNum").value;
if(agentNumber.length!=11){
    alert("invalid agent number");
    return;
}

const amount=document.getElementById("amount").value;
console.log(amount);
const availableBalance=document.getElementById("availableBalance").innerText;
console.log(availableBalance);
const newBalance=Number(availableBalance)-Number(amount);
if(newBalance<0){
    alert("not enough money to withdraw");
    return;
}

const pin=document.getElementById("cashOutPin").value;
if(pin=="1234"){
    const balance=document.getElementById("availableBalance");
    balance.innerText=newBalance;
    alert("withDraw Successful");
}
else{
    alert("Pin doesn't match");
    return;
}


})