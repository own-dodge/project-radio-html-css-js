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
  })
})

// Swiper
const swiper = new Swiper('.swiper', {
  slidesPerView: 4,
  spaceBetween: 30,
  freeMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
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
    if(element.classList.contains('podcasts__likes--active')) {
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
    if(element.classList.contains('podcasts__reposts--active')) {
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
const enterBtn = document.querySelector('.header_btn'),
  closeBtn = document.querySelector('.header__close-enter-btn'),
  enterForm = document.querySelector('.header__enter');

enterBtn.addEventListener('click', e => {
  e.preventDefault();
  enterForm.style.display = 'block';
})

closeBtn.addEventListener('click', e => {
  e.preventDefault();
  enterForm.style.display = 'none';
})

// podcasts btn
const bntPodcasts = document.querySelector('.podcasts__btn'),
  listHiddenPodcast = document.querySelectorAll('.podcasts__item--hidden');

bntPodcasts.addEventListener('click', e => {
  e.preventDefault();

  bntPodcasts.style.display = 'none';
  listHiddenPodcast.forEach(element => {
    element.classList.remove('podcasts__item--hidden');
  })

})
