// var chemit = JSON.parse(localStorage.getItem("chemist")) || [];
// console.log(chemit)

// let dair = JSON.parse(localStorage.getItem("dairy")) || [];
// console.log(dair)


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

const btn = (data)=>{
    console.log(data)
}

export default display;
// display(dair)