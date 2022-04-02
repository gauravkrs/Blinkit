
var mob= document.querySelector("input")


const SubmitMyMob = ()=>{
    mobile = ""+mob.value;
    if(mobile.length==10){
       location.href = "loginotp.html"
       alert('redirecting to otp page')
       localStorage.setItem('mobile',JSON.stringify(mobile))
    }
}



const changecolor=()=>{
console.log('hi')
    mobile = ""+mob.value;
    if(mobile.length==10){
       document.querySelector("button").style.backgroundColor='#318616';
       document.querySelector("button").style.cursor="pointer";
    }else{
        document.querySelector("button").style.backgroundColor='#ccc';
    }
 
}
