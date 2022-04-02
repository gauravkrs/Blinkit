var callopts = document.querySelector(".callotp")
var cutbtn = document.querySelector(".cutbtn")
var loginphone= document.querySelector(".login-phone")
callopts.addEventListener("click",calloptfunc)


loginphone.addEventListener("click",cutborder)
function cutborder(){
let loginphone= document.querySelector(".login-phone")
loginphone.style.border="none"
console.log("yes")
}


function calloptfunc(){
window.location.href="./otp.html"
//   console.log( alert("Your number is  link with Paytm")) 
}

cutbtn.addEventListener("click",cutbtnfun)
function cutbtnfun(){
window.location.href="./payment.html"
}
