var callopts = document.querySelector(".callotp")
var cutbtn = document.querySelector(".cutbtn")

callopts.addEventListener("click",calloptfunc)

var loginphone= document.querySelector(".login-phone")
// loginphone.addEventListener("input",cutborder)
// function cutborder(){

let inputDataM=loginphone.value
// // console.log(inputDataM)
// }

localStorage.setItem("contactNumberM",JSON.stringify(inputDataM))
function calloptfunc(){
    loginphone.style.border="none"
    let inputDataM=loginphone.value
    console.log(inputDataM)
    localStorage.setItem("contactNumberM",JSON.stringify(inputDataM))
    window.location.href="./otp.html"
//   console.log( alert("Your number is  link with Paytm")) 
}

cutbtn.addEventListener("click",cutbtnfun)
function cutbtnfun(){
window.location.href="./payment.html"
}
