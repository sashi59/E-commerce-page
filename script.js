let btn = document.querySelectorAll(".btn");
let imageModel = document.getElementById("imageModel");

btn[0].addEventListener("click",()=>{
    imageModel.src = "images/image1.png";

    btn[0].classList.add("active");

    btn[1].classList.remove("active");
    btn[2].classList.remove("active");

})

btn[1].addEventListener("click",()=>{
    imageModel.src = "images/image2.png";
    
    btn[1].classList.add("active");

    btn[0].classList.remove("active");
    btn[2].classList.remove("active");
    

})
btn[2].addEventListener("click",()=>{
    imageModel.src = "images/image3.png";

    btn[2].classList.add("active");

    btn[0].classList.remove("active");
    btn[1].classList.remove("active");


})