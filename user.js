window.onload= fun;
function fun(){
    const but1= document.getElementById("submit");
    but1.addEventListener("click",subfunction);
}
function subfunction(){
const name = document.getElementById("userName").value;
const pass = document.getElementById("password").value;
if(name==="fiker" && pass==="123"){
    window.open("dashbord.html");

}




    
}