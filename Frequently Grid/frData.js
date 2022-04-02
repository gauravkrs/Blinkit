function uukya()
{

    var fruits=[{
        name:"Potato",
        frprice:"₹28",
        strPrice:'₹31',
        image:'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,h=135/app/images/products/sliding_image/391305a.jpg'},
    {
        name:"Lemon",
        frprice:"₹46",
        strPrice:'₹52',
        image:'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,h=135/app/images/products/sliding_image/17748a.jpg?ts=1637652666'
    },
    {
        name:"Hybrid Tomato",
        frprice:"₹17",
        strPrice:'₹18',
        image:'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,h=135/app/images/products/sliding_image/3881a.jpg?ts=1639826649'
    },
    {
        name:"Bottle Gourd (Lauki)",
        frprice:"₹30",
        strPrice:'₹34',
        image:'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,h=135/app/images/products/sliding_image/217614a.jpg?ts=1639905201'
    },
    {
        name:"Ginger (Adrak)",
        frprice:"₹16",
        strPrice:'₹17',
        image:'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,h=135/app/images/products/sliding_image/421703a.jpg?ts=1639905261'
    }
    ]
    
    localStorage.setItem('fruitData',JSON.stringify(fruits));
}

uukya();