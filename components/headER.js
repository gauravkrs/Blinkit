const navbar = ()=>{
    return ` <div class="logo">
    <img src="https://blinkit.com/careers/sites/default/files/blinkit_logo.png" alt="logo"/>
</div>
<a href="#" class="toggleButton" onclick="calldropdown()">
  <div class="dropbtn">
    <span class=" bar"></span>
    <span class=" bar"></span>
    <span class=" bar"></span>
  </div>
</a>


<div class="dropdown">
    <div id="myDropdown" class="dropdown-content">
     <a href="https://blinkit.com/partner">Partner</a> 
     <a href="https://blinkit.com/leadership">Lead</a> 
     <a href="https://blinkit.com/leadership">Values</a> 
     <a href="https://blinkit.com/press">Press</a> 
     <a href="https://blinkit.com/security">Security</a> 
     <a href="https://blinkit.com/privacy">Privacy</a> 
     <a href="https://blinkit.com/terms">Terms</a> 
     <a href="https://blinkit.com/faq">FAQs</a> 
     <a href="https://blinkit.com/mobile">Mobile</a> 
     <a href="https://blinkit.com/contact">Contact</a> 
     <a href="https://blinkit.com/express">Express</a> 
     <a href="https://blinkit.com/local/">Local</a> 
     <a href="https://blinkit.com/spotlight">SpotLight</a> 
     <a href="https://blinkit.com/warehouse-partner">Warehouse</a> 
     <a href="https://blinkit.com/delivery">Deliver</a> 
    </div>
  </div>





 <div class="right">
    <ul class="menU">

        <li class="first">
            <a href="index.html">Home</a>
        </li>
        <li>
            <a href="About.html" >About</a>
        </li>
        <li>
            <a href="careers.html">Careers</a>
        </li>
        <li>
            <a href="partner.html">Partner</a>
        </li>
        <li class="last">
            <a href="blog.html">Blog</a>
        </li>

    </ul>
</div>  `
}

function rightDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }









export default navbar















// export {navbar,rightDropdown}