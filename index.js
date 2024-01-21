import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

let currentPageIndex = 0;

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
    slideChange: () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      changePage();
      offShare();
    },
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

const headerBtns = document.querySelectorAll('.catalog-header__btn');
const allPageToggleBtn = headerBtns[0];
const allPageToggleBtnSvg = allPageToggleBtn.querySelectorAll('svg');
const allPage = document.querySelector('.slides-pagination');
const pages = allPage.querySelectorAll('.page');

const toggleAllPage = () => {
  allPageToggleBtnSvg[0].classList.toggle('hidden');
  allPageToggleBtnSvg[1].classList.toggle('hidden');
  allPage.classList.toggle('hidden');
};

allPageToggleBtn.addEventListener('click', () => {
  toggleAllPage();
});

pages.forEach((page, i) => {
  page.addEventListener('click', () => {
    toggleAllPage();
    swiper.slideTo(i, 0);
  });
});

const changePage = () => {
  const pageNumbers = allPage.querySelectorAll('.page__index');
  pageNumbers[currentPageIndex].classList.remove('page__index--selected');
  pageNumbers[swiper.activeIndex].classList.add('page__index--selected');
  currentPageIndex = swiper.activeIndex;
};

const shareToggleBtn = headerBtns[1];
const shareToggleBtnSvg = shareToggleBtn.querySelectorAll('svg');
const dropdownMenu = document.querySelector('.dropdown-menu');
const menuItems = dropdownMenu.querySelectorAll('.menu-item');

const toggleShare = () => {
  shareToggleBtnSvg[0].classList.toggle('hidden');
  shareToggleBtnSvg[1].classList.toggle('hidden');
  dropdownMenu.classList.toggle('hidden');
};

const offShare = () => {
  shareToggleBtnSvg[0].classList.remove('hidden');
  shareToggleBtnSvg[1].classList.add('hidden');
  dropdownMenu.classList.add('hidden');
};

shareToggleBtn.addEventListener('click', () => {
  toggleShare();
});

menuItems[1].addEventListener('click', () => {
  navigator.clipboard.writeText(
    'https://kingturtle0.github.io/newjwsup-catalog/',
  );
  menuItems[1].classList.add('active');
  setTimeout(() => {
    menuItems[1].classList.remove('active');
  }, 1500);
});
