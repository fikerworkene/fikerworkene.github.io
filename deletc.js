window.onload=fun;
function fun(){
    const delet = document.getElementById("delet")
    delet.addEventListener("click",deletfun);

    function deletfun(){
        const mycourse = document.getElementById("cname").ariaValueMax;
        for(let i = 0; i < course.length;i++){
            if(courses[i].name==mycourse){
                course.splice(i,1);
                break;
            }
            return;
        }  
    }
    
}