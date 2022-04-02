let cartDB1 = JSON.parse(localStorage.getItem("cartDB")) || [];

    console.log(cartDB1)


    // <-Html to append to lacation

 let main = document.getElementById("cartPartAppendingM");
    let mycarttop = document.createElement("div")
    mycarttop.innerText="My Cart";
    mycarttop.setAttribute("id","mycarttop")

    let mycartbottom = document.createElement("div")
    mycartbottom.setAttribute("id","mycartbottom")



    const display = (data) => {
           mycartbottom.innerHTML = null;
           if(data.length==0){
            mycartbottom.innerHTML=   `    <div id="emptycart">
            <div class="emptycartimage">
                <img src="https://cdn.grofers.com/assets/ui/empty_states/emp_empty_cart.png" alt="emptycart"/>
            </div>
            <h3>you don't have any items in your cart</h3>
            <p>your favourite items are just a click away</p>
            <button id="emptycartbutton" onclick="cartvisibilityhidden()">start shopping</button>
        </div>`
        }
           
           data.forEach((el,index,array) => {
                      let div = document.createElement("div");
                      div.setAttribute("id", "contentttG")
                      let imgDiv = document.createElement("div");
                      imgDiv.setAttribute("id", "imgDivsizing")
                      let img = document.createElement("img");
                      img.setAttribute("id","pimg")
                      img.src = el.img;
                      // let add = document.createElement("button");
                      // add.setAttribute("id","addcart")
                      imgDiv.append(img)
                      let nameDiv = document.createElement("div");
                      nameDiv.setAttribute("class", "info")
                      let name = document.createElement("p");
                      name.innerText = el.name

                      let qtyandwt = document.createElement("div");
                      qtyandwt.setAttribute("class", "qtyandwt")

                      let qty = document.createElement("p");
                      qty.innerText = el.qty
                      let priceDiv = document.createElement("div");
                      priceDiv.setAttribute("class", "price")
                      let price = document.createElement("span")
                      price.innerText = `₹${el.price}`;
                      let strikePrice = document.createElement("span");
                      strikePrice.innerText = `₹${el.sPrice}`;
                      let btnDiv = document.createElement("div")
                      btnDiv.setAttribute("id",'addremovesetting')
                      let lBtn = document.createElement("button");
                      lBtn.innerText="-"
                      lBtn.style.backgroundColor="rgb(248,203,70)"
                      lBtn.style.border="none"
                      lBtn.addEventListener("click",()=>{
                                 // console.log(data[index])
                                 decreaseQty(data,index)
                      })
              
                      let qtyL = document.createElement("span");
                      qtyL.setAttribute("class","nummberOfElement")
                      qtyL.innerText=el.quantity;

                      let rBtn = document.createElement("button");
                      rBtn.innerText="+" 
                      rBtn.style.backgroundColor="rgb(248,203,70)"
                      rBtn.style.border="none"
                      rBtn.addEventListener("click",()=>{
                                 increaseQty(data,index)
                      })
                      btnDiv.append(lBtn,qtyL,rBtn)
                      imgDiv.append(img)
                      qtyandwt.append(qty,btnDiv)
                      priceDiv.append(price, strikePrice);
                      nameDiv.append(name,priceDiv,qtyandwt);
                      div.append(imgDiv, nameDiv)
                      mycartbottom.append(div);
           })
           main.append(mycarttop,mycartbottom)
}
display(cartDB1)




function  decreaseQty(data,index){
           if(data[index].quantity>0){
                      data[index].quantity--;
                      if(data[index].quantity==0){
            data.splice([index],1)
        }
        localStorage.setItem("cartDB",JSON.stringify(data))
        display(data)
    }
   
}

function increaseQty(data,index){
   if(data[index].quantity<3){
     data[index].quantity++; 
     localStorage.setItem("cartDB",JSON.stringify(data))
     display(data)
   }else{
       alert("Sorry! you can't add more of this item")
   }
}


//    <<<<<<-------function cart value--->
totalStrikedP();
totalPrice()

function totalStrikedP(data){
    let str=data.reduce(function(element,acc){
        return acc+element.sPrice*element.quqntity
    },0)
    let striked = document.querySelector(".sTRIKED");
    striked.innerText="";
    striked.innerText=str
}


function totalPrice(data){
    let str=data.reduce(function(element,acc){
        return acc+element.price*element.quqntity
    },0)
    let striked = document.querySelector(".pRICE");
    striked.innerText=""
    striked.innerText=str;
}


function cartvisibilityhidden(){
    var cartbodyVH=document.querySelector("#cartPartAppendingM");
    cartbodyVH.style.visibility="hidden"
}

document.querySelector("#lM5").addEventListener("cartPopup",function(){
    cartbodyVH.style.visibility="visible"
})