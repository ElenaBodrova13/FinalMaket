
import 'swiper/swiper-bundle.css';
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';


let pricesSwiper = document.querySelector(".prises");
export let swiperPrices;

window.addEventListener('resize', function(){ 
  mobilSwiperPrises();
});

if (window.innerWidth <= 513) {
  mobilSwiperPrises();
};

function mobilSwiperPrises() {

  if (window.innerWidth <= 513 && pricesSwiper.dataset.mobile == 'false') {
    swiperPrices = new Swiper(pricesSwiper, {
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
    pricesSwiper.dataset.mobile = 'true'

  };
    
  if (window.innerWidth > 513 && swiperPrices !== undefined ){
       
    pricesSwiper.dataset.mobile = 'false';
    
    swiperPrices.destroy();
    
  } 
};




 
