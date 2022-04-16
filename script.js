/*var par = document.getElementById("par");
var TextTemp = par.textContent;
par.textContent = "";
var i = 0;
var id = setInterval(function () {
  par.textContent = par.textContent + TextTemp[i++];
  if (par.textContent.length === TextTemp.length) {
    clearInterval(id);
  }
}, 10);
*/
/*
var par = document.getElementById("par") , i=0;
var stringText =par.textContent;
par.textContent="";
setInterval(function () {
    par.textContent += stringText.charAt(i++);
},50)
*/
    


var par = document.getElementById("par");
var TextTemp = par.textContent;
par.textContent="";
var i=0;
var id = setInterval(function () {
    par.textContent = par.textContent + TextTemp[i++];
    if(i > TextTemp.length-1)
    {
        clearInterval(id);
    }
},50);


