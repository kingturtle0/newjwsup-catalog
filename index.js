import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
  autoHeight: true,
  modules: [Pagination, Navigation],
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    slideChange: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
  },
});

const logo = document.querySelector('.catalog-header__logo');
logo.addEventListener('click', () => {
  swiper.slideTo(0);
});

const bricks = document.querySelectorAll('.brick');
bricks.forEach((brick, i) => {
  brick.addEventListener('click', () => {
    swiper.slideTo(i * 4 + 1, 0);
  });
});

const productTabs = document.querySelectorAll('.product-header__tab');
productTabs.forEach((tab, i) => {
  tab.addEventListener('click', () => {
    if (swiper.activeIndex < 5) {
      swiper.slideTo((i % 4) + 1, 0);
    } else {
      swiper.slideTo((i % 4) + 5, 0);
    }
  });
});
