let container = document.querySelector(".container");
let tuiles = document.querySelectorAll(".tuiles");



tuiles.forEach(element => {
    element.addEventListener("click",function(){
        console.log("content : ",element.innerHTML)
    })
    console.log("content all :",element.innerHTML)
});
