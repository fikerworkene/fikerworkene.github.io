window.onload=fun;
function fun(){
    const delet = document.getElementById("delet")
    delet.addEventListener("click",deletfun);

    function deletfun(){
        const mytable = document.getElementById("cname")
        const rem = mytable.slice (1,mytable.length-1);
        console.log(rem);
        
    }
    
}