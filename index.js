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

const copyLinkBtn = headerBtns[1];
const copyLinkBtnSvg = copyLinkBtn.querySelectorAll('svg');

const toggleCopy = () => {
  copyLinkBtnSvg[0].classList.toggle('hidden');
  copyLinkBtnSvg[1].classList.toggle('hidden');
};

copyLinkBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(
    'https://kingturtle0.github.io/newjwsup-catalog/',
  );
  copyLinkBtn.classList.add('active');
  toggleCopy();
  setTimeout(() => {
    copyLinkBtn.classList.remove('active');
    toggleCopy();
  }, 1500);
});
