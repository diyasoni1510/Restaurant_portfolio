console.log("hello")

const dishname = document.getElementById("dishname1")

const selectdish=()=>{
if(dishname.innerHTML=="Chicken Burger"){
    dishname.innerHTML="Japanese Salmon Sushi"
}
else if(dishname.innerHTML=="Japanese Salmon Sushi"){
    dishname.innerHTML="Fried Chicken"
}
else if(dishname.innerHTML=="Fried Chicken"){
    dishname.innerHTML="Fried Rice with Salad"
}
else if(dishname.innerHTML=="Fried Rice with Salad"){
    dishname.innerHTML="Grilled Fish"
}
else if(dishname.innerHTML=="Grilled Fish"){
    dishname.innerHTML="Italian Tomato Soup"
}
else if(dishname.innerHTML=="Italian Tomato Soup"){
    dishname.innerHTML="Chicken Burger"
}
}
setInterval(selectdish, 4000)
dishname.innerHTML = "Chicken Burger"
console.log(dishname.textContent)


// console.log("hello");

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("review");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "flex";
}

let showmenu = document.getElementById("showmenu")
const showMenu=()=>{
  showmenu = document.getElementById("showmenu")
  if(showmenu.classList.contains="Forchangedisplay")
  showmenu.classList.remove("Forchangedisplay")
  else
  showmenu.classList.add("Forchangedisplay");
  
}