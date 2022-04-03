
let cartDB = JSON.parse(localStorage.getItem("cartDB")) || [];

var paybtn = document.querySelector("#paybtn")
var radio = document.querySelector(".radiocheck")
paybtn.addEventListener("click", paynowfuc)
function paynowfuc() {
    window.location.href = "./paytm.html"
}
radio.addEventListener("click", radiofun)
function radiofun() {
    var radio = document.querySelector(".radiocheck")
    var paybtn = document.querySelector("#paybtn")
    if (radio.checked == true) {
        paybtn.style.backgroundColor = "green"
        paybtn.style.border = "none"
        paybtn.style.color = "white"
        document.radio.style.backgroundColor = "green"
    }

}

let cartData = document.querySelector(".cardappended");
// dispaly cart items 
function dispaly(data){
    cartData.innerHTML=null;
    // console.log(data)

    data.map(function(elem ,index){
        var div = document.createElement("div")
        div.setAttribute("class","cartData")
        var id = document.createElement("p")
        id.innerHTML=index+1

        var img = document.createElement("img");
        img.src = elem.img;
        var info = document.createElement("div")
        var name = document.createElement("p");
        name.innerText = elem.name;
        var qty = document.createElement("p");
        qty.innerText = elem.qty;
        var price = document.createElement("p");
        price.innerText=elem.price
        info.append(name,qty,price)
        div.append(id,img,info);
        cartData.append(div)


    })

}
dispaly(cartDB)
 var floatright = document.querySelector(".float-right")
 var floatright2 = document.querySelector(".float-right2")
 var totalitem = document.querySelector(".totalitems")
 
function pricedisplay(data){
var sum =0
for(var i=0;i<data.length;i++){
    sum=sum+data[i].price
}
console.log(sum)
floatright.innerHTML=`₹${sum}`


var rand=Math.floor( Math.random()*30)
// console.log(rand)
floatright2.innerHTML=`₹${sum+rand}`
totalitem.innerHTML=data.length+" item"
}

pricedisplay(cartDB)














totalStrikedP(cartDB);
totalPrice(cartDB)

var cardheader1 = document.querySelector("#cardheader1")
var priceM = document.querySelector("#priceM")
var strikedPM = document.querySelector("#strikedPM")


function totalStrikedP(data){
let sum =0;
for(let i=0;i<data.length;i++){
 sum += Number(data[i].sPrice)*data[i].quantity
}
console.log(sum)

let str= document.querySelector("#strikedPM")
// str.innerText=`You have recieved a discount of - ${sum}`;
}


function totalPrice(data){

let sum =0;
for(let i=0;i<data.length;i++){
 sum += Number(data[i].price)*data[i].quantity
}
console.log(sum)
let striked = document.querySelector("#priceM")


// striked.innerText=`Total Price of ${data.length}items - ${sum}`;
}
