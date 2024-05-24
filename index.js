var sidenav= document.getElementById("sidenav")
var menuitem= document.getElementById("menuitem")
var closenav= document.getElementById("closenav")

menuitem.addEventListener("click",function(){
    sidenav.style.right=0
})

closenav.addEventListener("click", function(){
    sidenav.style.right= "-50%"
})