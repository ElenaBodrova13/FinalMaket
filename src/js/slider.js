

import 'swiper/swiper-bundle.css';
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';


let newSwiper = document.querySelector(".new-slider");
export let swiper;

window.addEventListener('resize', function(){ 
  mobilSwiper();
});

if (window.innerWidth <= 513) {
  mobilSwiper();
};


function mobilSwiper () {

    if (window.innerWidth <= 513 && newSwiper.dataset.mobile == 'false') {
      swiper = new Swiper (newSwiper, {
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

      newSwiper.dataset.mobile = 'true';

    };

    
      if (window.innerWidth > 513 && swiper !== undefined ) {
          
        newSwiper.dataset.mobile = 'false';

      
          swiper.destroy();
      
   
    } 

  }


 
