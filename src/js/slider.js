/*import Swiper, { Pagination }  from 'swiper';*/

import Swiper from 'swiper';
import {Pagination } from 'swiper/modules';
// import Swiper and modules styles



Swiper.use({  Pagination });
const swiper = new Swiper('.swiper', {
    // Optional parameters
    
    spaceBetween:0,
    loop: true,
   
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    slidesPerView: 1.2,
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
  
 