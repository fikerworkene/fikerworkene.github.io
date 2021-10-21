 let coursearr=[];
 window.onload= fun;
 
function fun(){
//   let localData= localStorage.getItem("localcourses");
//   coursearr=JSON.parse("localData");

  
  const but = document.getElementById("myBtn");
  but.addEventListener("click",sortTable);
}
function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("table");
  switching = true;
  while (switching) {
    switching = false;
    rows = table.rows;
   
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("td")[1];
      y = rows[i + 1].getElementsByTagName("td")[1];
     
      //if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        if (new Date(x.innerHTML) >new Date(y.innerHTML)){
        
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
  //console.log(table)
}