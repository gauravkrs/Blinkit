// var chemit = JSON.parse(localStorage.getItem("chemist")) || [];
// console.log(chemit)

// let dair = JSON.parse(localStorage.getItem("dairy")) || [];
// console.log(dair)

let cartDB = JSON.parse(localStorage.getItem("cartDB")) || [];

const display = (data, main) => {
    main.innerHTML = null;

    data.forEach((el) => {
        let div = document.createElement("div");
        div.setAttribute("id", "cont")
        let imgDiv = document.createElement("div");

        let img = document.createElement("img");
        img.setAttribute("class","pimg")
        img.src = el.img_url;
        let add = document.createElement("button");
        add.innerText="+"
        add.addEventListener("click",()=>{
            btn(el)
        })
        imgDiv.append(img,add)


        let nameDiv = document.createElement("div");
        nameDiv.setAttribute("class", "info")

        let name = document.createElement("p");
        name.innerText = el.product_name

        let qty = document.createElement("p");
        qty.innerText = el.qty

        nameDiv.append(name, qty);

        let priceDiv = document.createElement("div");
        priceDiv.setAttribute("class", "price")

        let price = document.createElement("span")
        price.innerText = `₹${el.price}`;

        let strikePrice = document.createElement("span");
        strikePrice.innerText = `₹${el.strikeprice}`;

        priceDiv.append(price, strikePrice);
        div.append(imgDiv, nameDiv, priceDiv)
        main.append(div);
    })
}

const showCartqty = (item)=>{
    
}


const btn = (data)=>{
    let newCart  = {
         name : data.product_name,
         img : data.img_url,
         qty : data.qty,
         price : Number(data.price),
         sPrice : data.strikeprice
    }
    

    cartDB.push(newCart);
    console.log(cartDB)

    showCartqty(cartDB);
    localStorage.setItem("cartDB", JSON.stringify(cartDB))
}

export {display,showCartqty};

// display(dair)