//----------СЛАЙДЕР---------
new Swiper('.slider', {
   //вывод нумерации слайдов внизу
   pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      renderFraction: function (currentClass, totalClass) {
         return '0<span class="' + currentClass + '"></span>' + ' / 0' + '<span class="' + totalClass + '"></span>';
      },
   },
   //чтобы не срабатывало перетаскивание слайдов мышью.
   simulateTouch: false,
   //слайды круттся по скроллу колеса мыши
   mousewheel: {
      sensitivity: 1,
   },
   //бесконечная прокрутка слайдов
   loop: true,
});


//----------ПОИСК---------
const search = document.querySelector('.search');

search.addEventListener('mouseover', () => {
   const searchInput = document.querySelector('.search__input');
   searchInput.classList.add('search__input-active');
})

search.addEventListener('mouseout', () => {
   const searchInput = document.querySelector('.search__input');
   searchInput.classList.remove('search__input-active');
})


//----------МОДАЛЬНОЕ ОКНО---------
const openPopupModalButtons = document.querySelectorAll('[data-popupmodal-target]');

const closePopupModalButtons = document.querySelectorAll('[data-popupclose-button]');

const popupOverlay = document.getElementById('popupoverlay');

openPopupModalButtons.forEach (button => {
   button.addEventListener('click', () => {
      const popupmodal = document.querySelector(button.dataset.popupmodalTarget)
      openPopupModal(popupmodal);
   })
})

popupOverlay.addEventListener('click', () => {
   const popupmodal = document.querySelectorAll('.popupmodal.active');
   popupmodal.forEach(popupmodal => {
         closePopupModal(popupmodal);
   })
})

closePopupModalButtons.forEach(button => {
   button.addEventListener('click', () => {
      const popupmodal = button.closest('.popupmodal');
      closePopupModal(popupmodal);
   })
})

function openPopupModal(popupmodal) {
   if (popupmodal == null) return
   popupmodal.classList.add('active');
   popupOverlay.classList.add('active');
}

function closePopupModal(popupmodal) {
   if (popupmodal == null) return
   popupmodal.classList.remove('active');
   popupOverlay.classList.remove('active');
}


//---------------БУРГЕР------------------
const openModalButtons = document.querySelectorAll('[data-modal-target]');

const closeModalButtons = document.querySelectorAll('[data-close-button]');

const overlay = document.getElementById('overlay');

openModalButtons.forEach (button => {
   button.addEventListener('click', () => {
      const modal = document.querySelector(button.dataset.modalTarget)
      openModal(modal);
   })
})

overlay.addEventListener('click', () => {
   const modals = document.querySelectorAll('.modal.active');
   modals.forEach(modal => {
         closeModal(modal);
   })
})

closeModalButtons.forEach(button => {
   button.addEventListener('click', () => {
      const modal = button.closest('.modal');
      closeModal(modal);
   })
})

function openModal(modal) {
   if (modal == null) return
   modal.classList.add('active');
   overlay.classList.add('active');
}

function closeModal(modal) {
   if (modal == null) return
   modal.classList.remove('active');
   overlay.classList.remove('active');
}