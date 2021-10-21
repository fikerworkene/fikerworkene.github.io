window.onload   =validations;

const myuser=[];
function validations(){
    const myinfo = document.getElementById("myinfo");
    const form=document.forms.myform;
    console.log(form.Fname)
    const submit = document.getElementById("submit");
    submit.addEventListener("click",fun1);

    function fun1(){
        const fname= form.Fname.value;
        const phone= form.phone.value;
        const email= form.email.value;
        const message= form.message.value;
        if( fname==="" || phone==="" || email==="" || message==="" ) {
            myinfo.innerHTML="fill out"
            myinfo.style.display="block";
            return false;
        
        }
        else if(phone.length<10 || phone.length>10){
            myinfo.innerHTML = "invalid";
            myinfo.style.display="block";
            return false;
        }else{
            myinfo.style.display="none"; 
    obj1={
        Fname: fname,
        email:email,
        phone:phone,
        message:message
    }
    myuser.push(obj1)

    }
    form.reset();

}

}