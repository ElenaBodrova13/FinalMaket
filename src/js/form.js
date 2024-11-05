let masageButton = document.querySelector(".buttons-contacts__message");
let form = document.querySelector(".form");
let formSubmit =document.querySelector(".form__burger");
let masageButtonMenu = document.querySelector(".menu__masage");
let sideMenu =document.querySelector(".side-menu");
let conteiner =document.querySelector(".conteiner");
let footer = document.querySelector(".conteiner__footer");


masageButton.addEventListener("click", function(){
    form.classList.toggle("hidden");
    sideMenu.classList.toggle("fog");
    conteiner.classList.toggle("fog");
    footer.classList.toggle("fog");
    
});
masageButtonMenu.addEventListener("click", function(){
    form.classList.toggle("hidden");
    sideMenu.classList.toggle("fog");
});


formSubmit.addEventListener("click", function(){
    form.classList.toggle("hidden");
    conteiner.classList.toggle("fog");
    footer.classList.toggle("fog");
    if (window.innerWidth <=1120) {
        sideMenu.classList.toggle("fog");
    } else {
        sideMenu.classList.toggle("fog");
    }
    
    
});
