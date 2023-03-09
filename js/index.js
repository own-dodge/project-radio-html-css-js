// Burger
const burgerBtn = document.querySelector('.header__burger'),
  headerNav = document.querySelector('.header__nav-top'),
  menuNav = document.querySelectorAll('.header__link-top');

burgerBtn.addEventListener('click', () => {
  headerNav.classList.toggle('header__nav-top--active');
  burgerBtn.classList.toggle('header__burger--active');
})

menuNav.forEach(element => element.addEventListener('click', () => {
  headerNav.classList.remove('header__nav-top--active');
  burgerBtn.classList.remove('header__burger--active');
}))

// Search
const searchBtn = document.querySelector('.header__search'),
  searchInput = document.querySelector('.header__search-input');

searchBtn.addEventListener('click', () => {
  searchInput.classList.toggle('header__search-input--active');
})

// Select
const element = document.querySelector('.broadcast__select');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
  renderSelectedChoices: false,
});

// Accordion
new Accordion('.accordion-container');

// Tabs
const btnGuest = document.querySelectorAll('.guests__btn'),
  infoBlock = document.querySelectorAll('.guests__person-info');

btnGuest.forEach(element => {
  element.addEventListener('click', e => {

    e.preventDefault();

    const path = e.currentTarget.dataset.path;

    btnGuest.forEach(btn => btn.classList.remove('guests__btn--active'));
    e.currentTarget.classList.add('guests__btn--active');

    infoBlock.forEach(block => block.classList.remove('guests__person-info--active'));
    document.querySelector(`[data-target="${path}"]`).classList.add('guests__person-info--active');

    document.querySelector(`[data-target="${path}"]`).scrollIntoView({behavior: 'smooth'});
  })
})

// Swiper
const swiper = new Swiper('.swiper', {
  slidesPerView: 4,
  spaceBetween: 30,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  },
  freeMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Swiper Playlist
const swiperPlaylists = new Swiper('.swiper__playlists', {
  slidesPerView: "auto",
  spaceBetween: 15,
});

// Select
document.querySelector('[data-id="2"]').style.display = 'none';

// likes, reposts
const likeBtn = document.querySelectorAll('.podcasts__likes'),
  repostBtn = document.querySelectorAll('.podcasts__reposts');

likeBtn.forEach(element => {
  let numberUse = element.querySelector('.podcasts__use-number');
  element.addEventListener('click', e => {
    e.preventDefault();
    element.classList.toggle('podcasts__likes--active');
    if (element.classList.contains('podcasts__likes--active')) {
      numberUse.textContent = `${Number(numberUse.textContent) + 1}`;
    } else {
      numberUse.textContent = `${Number(numberUse.textContent) - 1}`;
    }
  })
})

repostBtn.forEach(element => {
  let numberUse = element.querySelector('.podcasts__use-number');
  element.addEventListener('click', e => {
    e.preventDefault();
    element.classList.toggle('podcasts__reposts--active');
    if (element.classList.contains('podcasts__reposts--active')) {
      numberUse.textContent = `${Number(numberUse.textContent) + 1}`;
    } else {
      numberUse.textContent = `${Number(numberUse.textContent) - 1}`;
    }
  })
})

// Validate form
new JustValidate('.form-validation', {
  rules: {
    name: {
      required: true,
      maxLength: 10,
      minLength: 2,
    },
    text: {
      required: true,
      minLength: 2,
      maxLength: 300,
    },
    email: {
      required: true,
      email: true,
    },
  },
  messages: {
    name: {
      required: 'Вы не ввели имя',
    },
    text: {
      required: 'Вы не ввели текст',
    },
    email: {
      required: 'Вы не ввели e-mail',
      email: 'Введите корректный адрес почты',
    },
  },
  colorWrong: '#D52B1E',
})


// enter form
const enterBtn = document.querySelectorAll('.header_btn'),
  closeBtn = document.querySelector('.header__close-enter-btn'),
  modal = document.querySelector('.header__modal'),
  enterForm = document.querySelector('.header__enter');

enterBtn.forEach(element => {
  element.addEventListener('click', e => {
    e.preventDefault();
    modal.classList.add('header__modal--open')
  })
})

closeBtn.addEventListener('click', e => {
  e.preventDefault();
  modal.classList.remove('header__modal--open')
})

enterForm.addEventListener('click', event => {
  event._isClickWithinModal = true;
})

modal.addEventListener('click', event => {
  if(event._isClickWithinModal) return;
  modal.classList.remove('header__modal--open');
})

// music-block btn
const btnMusic = document.querySelector('.header__music-menu-320'),
  musicBlock = document.querySelector('.header__music-block');

btnMusic.addEventListener('click', () => {
  musicBlock.classList.toggle('header__music-block--active');
  btnMusic.classList.toggle('header__music-menu-320--active');
})


// podcasts btn
const bntPodcasts = document.querySelector('.podcasts__btn'),
  listPodcast = document.querySelectorAll('.podcasts__item');

window.addEventListener('DOMContentLoaded', () => {
  if (window.screen.width <= 568) {
    for (let i = 4; i <= listPodcast.length - 1; i++) {
      listPodcast[i].classList.add('podcasts__item--hidden')
    }
  }
  const listHiddenPodcast = document.querySelectorAll('.podcasts__item--hidden');

  bntPodcasts.addEventListener('click', e => {
    e.preventDefault();

    bntPodcasts.style.display = 'none';
    listHiddenPodcast.forEach(element => {
      element.classList.remove('podcasts__item--hidden');
    })

  })
})


