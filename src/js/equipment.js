

import 'swiper/swiper-bundle.css';
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';


let newEquipment = document.querySelector(".equipment");
export let Equpswiper;

let mobilEqup=function() {

  if (window.innerWidth <= 768 && newEquipment.dataset.mobile == 'false') {
    Equpswiper = new Swiper(newEquipment, {
    modules:[ Pagination ],
      // Optional parameters
      
    spaceBetween:0,
    loop: true,
     
      // If we need pagination
    pagination: {
    el: '.swiper-pagination',
      },
      slidesPerView: 1.2,
    });
    newEquipment.dataset.mobile = 'true'
  }
    
  if (window.innerWidth > 768 ){
       
    newEquipment.dataset.mobile = 'false';
    Equpswiper.destroy();
    
  } 
};


window.addEventListener('resize', function(){ 
  mobilEqup();
});

if (window.innerWidth <= 768) {
  mobilEqup();
};

 


let buttonElseEqup = document.querySelector(".equipment__else");
let equpExtra = document.querySelector(".equipment__extra");
let rowEqup = document.querySelector(".equipment__rows");

buttonElseEqup.addEventListener("click", function(){
  equpExtra.classList.toggle("hidden");
      
      if (equpExtra.classList.contains("hidden")) {
          buttonElseEqup.textContent="Показать все";
          rowEqup.classList.remove("rowsupp");
          rowEqup.classList.add("rowsdown");
      

          buttonElseEqup.appendChild(rowEqup);
      } else {
        buttonElseEqup.textContent="Скрыть";
      
      rowEqup.classList.remove("rowsdown");
      rowEqup.classList.add("rowsupp");
      buttonElseEqup.appendChild(rowEqup);
          
      }
      
  });
  
