window.onload   =validations;

const myuser=[];
function validations(){
    const form=document.forms.myform;
    console.log(form.Fname)
    const submit = document.getElementById("submit");
    submit.addEventListener("click",fun1);

    function fun1(){
        const fname= form.Fname.value;
        const lname= form.Lname.value;
        const email= form.email.value;
        if(email==="" || fname==="" || lname==="" ) {
           
            return false;
        
        }
        
    obj1={
        email:email,
        Fname: fname,
        Lname:lname,
    }
    myuser.push(obj1)

    }
    form.reset();

}

