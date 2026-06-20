document.getElementById("login-btn").addEventListener("click",function(){
const phoneNumber=document.getElementById("phoNum");
const Number=phoneNumber.value;


const pin=document.getElementById("pin").value;
if(Number=="01739586750" && pin=="1234"){
    alert("login successful");
    window.location.assign("/home.html");
}
else{
    alert("login failed");
    return;
}

})