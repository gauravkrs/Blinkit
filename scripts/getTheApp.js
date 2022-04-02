let phone = document.querySelector("#radiophone")
let email = document.querySelector("#radioemail")

email.defaultChecked;
document.querySelector("#inputfield").placeholder="Email"




function call(){
if(email.checked){
  // console.log("email")
  document.querySelector("#inputfield").placeholder="Email"
}
else{
//   console.log("phone")
document.querySelector("#inputfield").placeholder="phone"
}

}

const sharelink = ()=>{
let inpt=document.querySelector("#inputfield").value
if(inpt==""){
  alert('this field is required')
}else{
  if(email.checked && inpt!="" ){
if(inpt.includes('@gmail.com')){
    alert('App link shared to E-mail account')
}else{
    alert('enter a valid email')
}
}
else if(phone.checked && inpt!="" ){
inpt=""+inpt
if(inpt.length==10){
    alert('App link shared to Mobile number')
}else{
    alert('enter a valid phone no.')
}
}
}

}