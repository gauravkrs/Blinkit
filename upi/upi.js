function myfun()
{
    let ver=document.getElementById("verifyBtn")
    ver.innerText="verified";
    ver.setAttribute('class','ver');

    let verify_img=document.createElement('img');
    verify_img.setAttribute('id','verify_img')
    verify_img.src='https://cdn-icons-png.flaticon.com/512/190/190411.png'
    verify_img.height=15 
    verify_img.width=15

    ver.append(verify_img);

}