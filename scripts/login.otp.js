let mob=JSON.parse(localStorage.getItem('mobile'))


// Appending para of mobile number

let loginDetails = document.querySelector(".LOginDEtails>div>p")

loginDetails.innerText=`Enter 4 digit code sent to your phone +91-${mob}`


    //    Timer to resend code (otp)


var resendTimer = document.querySelector(".resendCode")

const resendCode = ()=>{
resendTimer.innerText=""
let i=30;
let time = setInterval((resendTimer)=>{
if(i>0){
    // console.log(i)
    document.querySelector(".resendCode").style.color='grey';
    document.querySelector(".resendCode").innerText = `Resend Code (in ${i} secs)`
}
else{
    clearInterval(time);
    document.querySelector(".resendCode").innerText = "Resend Code";
    document.querySelector(".resendCode").style.color='#318616';
    document.querySelector(".resendCode").style.textDecoration = "underline"
    document.querySelector("button").style.cursor="pointer";
}
i--;
},1000)

}

//    call of timer
 resendCode();

// button highlighting on complete fillup
const checkinput =()=>{
    
    var otps = document.querySelectorAll("#otp")
    if(otps[0].value!="" && otps[1].value!="" && otps[2].value!="" && otps[3].value!=""){
          document.querySelector("#letsgo").style.backgroundColor="#318616"
    }
}





    // form submission



document.querySelector("form").addEventListener('submit',(event)=>{
event.preventDefault(event)
let otps = document.querySelectorAll("#otp")

if(otps[0].value==1 && otps[1].value==2 && otps[2].value==3 && otps[3].value==4){
alert("redirecting to home page")
window.location.href = "index.html"

}else{

otps[0].style.border = "2px solid red";
otps[1].style.border = "2px solid red";
otps[2].style.border = "2px solid red";
otps[3].style.border = "2px solid red";
alert("verification failed")
event.preventDefault(event)


}
})



