function showOnly(id){
    const addMoney=document.getElementById("addmoneyShow");
addMoney.classList.add("hidden");
    

    const cashOutShow=document.getElementById("cashOutShow");
cashOutShow.classList.add("hidden");
    

    const transferShow=document.getElementById("transferMoneyShow");
transferShow.classList.add("hidden");
    

    const bonusShow=document.getElementById("bonusShow");
bonusShow.classList.add("hidden");
    

    const payBillShow=document.getElementById("payBillShow");
payBillShow.classList.add("hidden");
    

    const transShow=document.getElementById("transaction");
transShow.classList.add("hidden");
    
    const onlyShow=document.getElementById(id);
onlyShow.classList.remove("hidden");
    





}