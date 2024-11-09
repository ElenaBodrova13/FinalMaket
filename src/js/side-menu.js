
let burger = document.querySelector(".menu__burger");
let sideMenu = document.querySelector(".side-menu");

let conteiner = document.querySelector(".conteiner");
let navBurger = document.querySelector(".side-nav__burger");
console.log(navBurger);
       
const mainDoc = document.documentElement;
const mainDocWhidht=mainDoc.clientWidth;



if  (window.innerWidth > 1120) {
    sideMenu.classList.toggle("hidden");
}
  
burger.addEventListener("click", function(){

    sideMenu.classList.toggle("hidden");
    conteiner.classList.add("fog");
   
      
});

navBurger.addEventListener("click", function(){
    
   sideMenu.classList.toggle("hidden");
    conteiner.classList.remove("fog");
    
       
}); 


window.addEventListener('resize', () => {
    if ( window.innerWidth > 1120 && sideMenu.classList.contains("hidden")) {
       
              sideMenu.classList.remove("hidden");
      
    }  
        if ( window.innerWidth < 1120 && !sideMenu.classList.contains("hidden")) {
        
            sideMenu.classList.add("hidden");
        }


  });

  