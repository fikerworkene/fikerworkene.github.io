window.onload=fun;
const course = [];
const project = [];
const message = [];


const p1 ={
    name:"home Security",
    date:"2017-05-6",
    link: "projectFile.html",

}
const p2 ={
    name:"Transformer",
    date:"2019-08-20",
    link:"projectFile.html ",

}
 project=[p1,p2]

function fun(){
   
    localStorage.setItem("localcourses",JSON.stringify(course));
    localStorage.setItem("localprojects",JSON.stringify(project));
    localStorage.setItem("localmessages",JSON.stringify(message));


}
 function addproject(){
     
 }