const burger = document.querySelector(".popup_burger");
const bur = document.querySelector(".popup_two");

burger.addEventListener("click", function(){
    bur.classList.toggle("activ");
});