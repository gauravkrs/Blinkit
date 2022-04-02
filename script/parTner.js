


function myFunction(){

    let nam = document.querySelector(".name").value;

let phon=document.querySelector(".phone").value;
let mail=document.querySelector(".email").value;
let city = document.querySelector(".ciTY").value;
let state = document.querySelector(".state").value;
let captcha = document.querySelector(".recaptcHA")


    if(nam==""){             
        alert('enter your name');
    }else if(phon=="" || phon.length!=10){
        console.log(typeof(phon))
        alert("enter valid phone number")
    }else if(mail==""){
        alert("enter valid email address")
    }else if(city==""){
        alert("enter city name");
    }else if(state==""){
       alert("enter state")
    }else{
        if(captcha.checked==false){
            alert("The answer you entered for the CAPTCHA was not correct.")
        }else{
            alert("Thank you for your interest in grofers.")
        }
    }
}