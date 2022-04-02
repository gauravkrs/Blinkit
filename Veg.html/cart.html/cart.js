var cartdata=JSON.parse(localStorage.getItem("cart"))
console.log(cartdata)



 var total=cartdata.reduce(function (sum,elem,index,arr){
      return sum+Number(elem.price)
    },0)
  var p=document.querySelector("#Cart")

  var Total=document.querySelector(".total")
 Total.innerText=`₹ ${total}`




var p=document.createElement("p")
var length=cartdata.length
var len=document.querySelector(".length")
len.innerText=`Iteam ${length}`

p.innerText=total
// li.innerText=index.total
document.querySelector("#Cart").append(p);
cartdata.map(function(elem,index){

   var box=document.createElement("div");
   var cartbox=document.createElement("div")
   cartbox.setAttribute("class", "flex")

   var cartbox2=document.createElement("div");

   var image2=document.createElement("img");
   image2.src=elem.image;

   
      var price=document.createElement("h3")
      price.innerText=elem.price
   var name=document.createElement("p")

   name.innerText=elem.name
   var button=document.createElement("button")
   button.innerText="+"
   button.addEventListener("click",function(){
     addproduct(elem,index)
   })
   var button2=document.createElement("button")
   button2.innerText="-"
   button2.addEventListener("click", function (){
     removeitem(elem,index)
   })
   cartbox2.append(name,price,button,button2)

   cartbox.append(image2,cartbox2)

   box.append(cartbox);
   document.querySelector("#Cart").append(box);
})

function removeitem(elem,index){
  cartdata.splice(index,1)
  localStorage.setItem("cart",JSON.stringify(cartdata))

   window.location.reload()

  // console.log(elem)
}
function addproduct(elem,index){
  cartdata.slice(index,1)
  localStorage.setItem("cart",JSON.stringify(cartdata))

  window.location.reload()

}
