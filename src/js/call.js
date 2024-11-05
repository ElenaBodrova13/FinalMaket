
let sideMenu =document.querySelector(".side-menu");
let conteiner =document.querySelector(".conteiner");
let callSubmit =document.querySelector(".call__burger");
let callButton =document.querySelector(".buttons-contacts__tell");
let callButtonMenu =document.querySelector(".menu__tell");
let call = document.querySelector(".call");
let footer = document.querySelector(".conteiner__footer");




callButton.addEventListener("click", function(){
    call.classList.toggle("hidden");
    sideMenu.classList.toggle("fog");
    conteiner.classList.toggle("fog");
    footer.classList.toggle("fog");
    
});
callButtonMenu.addEventListener("click", function(){
    call.classList.toggle("hidden");
    sideMenu.classList.toggle("fog");
});


callSubmit.addEventListener("click", function(){
    call.classList.toggle("hidden");
    conteiner.classList.toggle("fog");
    footer.classList.toggle("fog");
    if (window.innerWidth <=1120) {
        sideMenu.classList.toggle("fog");
    } else {
        sideMenu.classList.toggle("fog");
    }
    
    
});