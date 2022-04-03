var contactNumberAppend=JSON.parse(localStorage.getItem("contactNumberM"));
console.log(contactNumberAppend)

var contactAppendSms=document.querySelector(".rlinkbody-text")

contactAppendSms.innerHTML=`Paytm has sent an SMS with an activation code to: +91${contactNumberAppend}`;


var field = document.querySelectorAll("input")
function allselect() {
    var field = document.querySelectorAll("input")
    var loginput=document.querySelector("#loginput")
    if (field[0].value !== "" && field[1].value !== "" && field[2].value !== "" && field[3].value !== "" && field[4].value !== "" && field[5].value !== "") {
        loginput.style.backgroundColor = "green"
        loginput.style.color = "white"
        loginput.style.border = "none"
        
    }
    
}
//     // function loginput(){
//     //     opttime()
//     // }

var timeLeft = 10;
var elem = document.getElementById('some_div');
var timerId = setInterval(countdown, 1000);

function countdown() {
if (timeLeft == 0) {
    clearTimeout(timerId);
    doSomething();
    
} else {
    elem.innerHTML =  'resend code ' +timeLeft ;
    timeLeft-- ;
}
}

function doSomething() {
elem.innerHTML=""
elem.innerHTML =  'resend code ' 

}
// var e= document.getElementById("some_div")
// e.addEventListener("click",resendotp)
// function resendotp(){
//     countdown()
// }
var loginput=document.querySelector("#loginput")
loginput.addEventListener("click",loginputs)
function loginputs(){

window.location="./suc.html"
}


// loginputs()
