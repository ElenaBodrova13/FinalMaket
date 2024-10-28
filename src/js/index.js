import '../scss/style.scss';
import "../js/slider";





let burger = document.querySelector(".menu__burger");
let sideMenu = document.querySelector(".side-menu");
let conteiner = document.querySelector(".conteiner");
let navBurger = document.querySelector(".nav__burger");
const mainDoc = document.documentElement;
const mainDocWhidht=mainDoc.clientWidth;


   



if (mainDocWhidht>=1120) {
    sideMenu.classList.toggle("unhidden");
}

burger.addEventListener("click", function(){
  
    sideMenu.classList.add("unhidden");
    if (mainDocWhidht<768) {
        
        conteiner.classList.add("hidden");
    } else {
    conteiner.classList.add("fog");
    }
    
}) 

navBurger.addEventListener("click", function(){
    sideMenu.classList.toggle("unhidden");
    conteiner.classList.remove("hidden");
    conteiner.classList.remove("fog");
    
}) 


window.addEventListener('resize', () => {
    if (window.innerWidth<768 &  sideMenu.classList.contains("unhidden")) {
        conteiner.classList.add("hidden");
              console.log ("Click hidden")
    }  else {
    
    console.log("click max 768");  
   
}

  });
  
  
  

  let buttonElse = document.querySelector(".collection__else");
  let submenu = document.querySelector(".submenu");
  let row = document.querySelector(".collection__rows");
 
  buttonElse.addEventListener("click", function(){
    submenu.classList.toggle("collection__submenu-hidden");
    
    if (submenu.classList.contains("collection__submenu-hidden")) {
        buttonElse.textContent="Показать все";
        row.classList.remove("rowsupp");
        row.classList.add("rowsdown");
     

        buttonElse.appendChild(row);
    } else {
        buttonElse.textContent="Скрыть";
      
       row.classList.remove("rowsdown");
       row.classList.add("rowsupp");
         buttonElse.appendChild(row);
        
    }
    
  });
  