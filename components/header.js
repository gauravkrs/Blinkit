const navbar=()=>{
return `<div id="mainheaderM1">
<ul id="ulM">
    <li id="lM1"><a href="index.html"  id="lM1"><img id="lM" src="https://blinkit.com/images/header/blinkit-logo-header-05a0b5f.png"/></a></li>
    <li id="lM2">
        <a href="#" id="lM2s"><h2 id="randomDelivery"></h2><span id="lM2ss" style="display:grid;grid-template-columns:1.5fr 1fr; text-align: center; flex-flow: row;align-items: center; "><p id="mapM">Pune, Maharashtra</p><i id="mapL" class="fa-solid fa-square-caret-down"></i></span></a>
    </li>
    <li id="lM3"><a href="#" style="display: flex;"><i id="searchM1" class="fa-solid fa-magnifying-glass"></i><input id="searchM2" type="search" placeholder="Search for products" /></a></li>
    <li id="lM4"><a href="#" id="loginandprofile">Login</a><a href="#" id="loginandprofile1"></a></li>
    <li id="lM5"><a href="#" id="lM5M"><span id="h5CM"><i style="color: white;" class="fa-solid fa-cart-shopping"></i></span><span id="h5CM" class="h5c">Empty Cart</span><span id="h5CM" class="h5m">₹ 0</span></a></li>
    <li id="lM6"><a href="getTheApp.html"><i class="fa-solid fa-mobile-screen"></i>  get the App</a></li>
</ul>
</div>
<div id="blurpopM">
    <div id="locationPopM">
        <div id="locup"><i id="locup1" class="fa-solid fa-sort-up"></i></div>
        <div id="locationsubpart">
            <i id="crossM" class="fa-solid fa-xmark"></i>
            <h3>Change Location</h3>
            <div id="locationPopsubM">
                <div id="locationPopsubM1"><p id="locationPopsubM11" >Detect my Location</p></div> --
                <div id="locationPopsubM2">OR</div>--
                <div id="locationPopsubM3">
                    <input id="locationPopsubM31" type="text"  placeholder="Type your city Name"/>
                </div>
            </div>
            <div id="appendCNM"></div>
        </div>
    </div>
</div>
<div id="searchBarHaiBhai"><span id="appendVegetable"></span></div>

    `;
}
export default navbar;