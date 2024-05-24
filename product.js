var sidenav= document.getElementById("sidenav")
var menuitem= document.getElementById("menuitem")
var closenav= document.getElementById("closenav")

//console.log(productlist)

menuitem.addEventListener("click",function(){
    sidenav.style.right=0
})

closenav.addEventListener("click", function(){
    sidenav.style.right= "-50%"
})

var productContainer=document.getElementById("product-container")
var search= document.getElementById("search")
var productlist= productContainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredValue= event.target.value.toUpperCase()

    for(count=0; count<productlist.length; count=count+1){
        var productname = productlist[count].querySelector("h1").textContext

        if(productname.toUpperCase().indexOf(enteredValue)<0){
            productlist[count].style.display= "none"
        }else{
            productlist[count].style.display= "block"
        }
    }
})