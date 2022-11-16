
document.querySelector("#join").addEventListener("click", function(){
    document.querySelector(".popup").classList.add("active");
})

document.querySelector("#join1").addEventListener("click", function(){
    document.querySelector(".popup").classList.add("active");
})

document.querySelector("#join2").addEventListener("click", function(){
    document.querySelector(".popup").classList.add("active");
})

document.querySelector(".popup .close-btn").addEventListener("click", function(){
    document.querySelector(".popup").classList.remove("active");
});


