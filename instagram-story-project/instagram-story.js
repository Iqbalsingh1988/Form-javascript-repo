
// code start here

// all variables
const imgArea = document.querySelector(".img_area");
const imgLike = document.querySelector(".img_like");
const svg = document.querySelector(".img_like svg");
const heartLike = document.querySelector(".like-heart");
let value = 0;

// Double Click function
imgArea.addEventListener("dblclick", function(){
    console.log("svg");
    svg.style.fill = "red";
    svg.style.opacity = "1";
    imgLike.setAttribute("class", "img_like animate");
    heartLike.style.fill="red"

    setTimeout(function() {
        imgLike.setAttribute("class", "img_like");
        svg.style.fill = "transparent";
        svg.style.opacity = "0";
    }, 1000);

})

// Single Click function
   heartLike.addEventListener("click", function() {
    if (value === 0) {
        heartLike.style.fill="red";
        value = 1;
    }
    else {
        heartLike.style.fill="transparent";
        value = 0;
    }
   }) 
