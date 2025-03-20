import { CardData } from './CardData.js';
// !======> html Element
const navButton = document.querySelector('.bar-icon');
const navList = document.querySelector('.navbar-box .nav-list ');
const navbar = document.querySelector('.navbar');
const cardSlide = document.querySelector('.card-swiper ');
const scrollToTopBtn = document.querySelector('.scroll-to-top');
const lisThatHoldDropDowns = document.querySelectorAll('.dropdown');


// !======> Events
navButton.addEventListener('click', function () {
  navList.classList.toggle('show');
});

window.addEventListener('scroll', () => {
  if (window.scrollY > window.innerHeight * 0.5) {
    scrollToTopBtn.classList.add('show');
  } else {
    scrollToTopBtn.classList.remove('show');
  }
});

lisThatHoldDropDowns.forEach(li => {
  li.addEventListener('click', e => {
    e.currentTarget.querySelector('.dropdown-list').classList.toggle('show-dropdown');
  });
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0 });
});

window.addEventListener('scroll', function () {
  if (window.scrollY > 50) {
    navbar.classList.add('bg-nav');
  } else {
    navbar.classList.remove('bg-nav');
  }
});

// !======> Swiper lip

document.addEventListener('DOMContentLoaded', function () {
  new Swiper('.header-swiper', {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  new Swiper('.card-Swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  });
});

// ! ========> add card to html ====>
cardSlide.innerHTML = '';

CardData.forEach(item => {
  const slide = document.createElement('div');
  slide.classList.add('swiper-slide', 'card-slide');

  const card = document.createElement('div');
  card.classList.add('card');

  const img = document.createElement('img');
  img.src = item.imgPath;
  img.classList.add('card-img');
  img.alt = item.bodyTitle;

  const headCard = document.createElement('div');
  headCard.classList.add('head-card');
  headCard.innerHTML = `
    <p class="first-p">
      <span><i class="fa-solid fa-book"></i></span>
      ${item.headTitle1}
    </p>
    <p>${item.headTitle2}</p>
  `;

  const bodyTitle = document.createElement('h2');
  bodyTitle.textContent = item.bodyTitle;

  const cardDes = document.createElement('p');
  cardDes.classList.add('card-des');
  cardDes.textContent = item.bodyDes;

  const cardBtnBox = document.createElement('div');
  cardBtnBox.classList.add('card-btn-box');

  const button1 = document.createElement('button');
  button1.classList.add('blue-btn');
  button1.innerHTML = `${item.button1} <i class="fa-solid fa-arrow-right"></i>`;

  const button2 = document.createElement('button');
  button2.classList.add('blue-btn');
  button2.innerHTML = `${item.button2} <i class="fa-solid fa-arrow-right"></i>`;

  cardBtnBox.append(button1, button2);

  const footerCard = document.createElement('div');
  footerCard.classList.add('footer-card');
  footerCard.innerHTML = `
    <div><span><i class="fa-solid fa-users"></i></span> ${item.footerDes1}</div>
    <div><span><i class="fa-regular fa-clock"></i></span> ${item.footerDes2}</div>
    <div><span><i class="fa-regular fa-clock"></i></span> ${item.footerDes3}</div>
  `;

  card.append(img, headCard, bodyTitle, cardDes, cardBtnBox, footerCard);
  slide.appendChild(card);
  cardSlide.appendChild(slide);
});

