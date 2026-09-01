const btn = document.querySelectorAll('.modal-card');
const modalOverlay = document.querySelector('.modal-overlay');
const modals = document.querySelectorAll('.modal');
const closed2 = document.querySelectorAll('.modal__btn');
const modalSOS = document.querySelector('.modalSOS');


btn.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');

    modals.forEach((el) => {
      el.classList.remove('modal--visible');
    });

    document.querySelector(`[data-target="${path}"]`).classList.toggle('modal--visible');
    modalOverlay.classList.toggle('modal-overlay--visible');
    document.body.classList.toggle('stop-scroll');
  });
});

modalOverlay.addEventListener('click', (e) => {
  if (e.target == modalOverlay) {
    modalOverlay.classList.remove('modal-overlay--visible');
    modals.forEach((el) => {
      el.classList.remove('modal--visible');
      document.body.classList.remove('stop-scroll');
    });
  };
});

function closedFunction() {
  modalOverlay.classList.remove('modal-overlay--visible');

  modals.forEach((elem) => {
    elem.classList.remove('modal--visible');
    document.body.classList.remove('stop-scroll');
  });
}

closed2.forEach(function (el) {
  el.addEventListener('click', closedFunction);
})

modalSOS.addEventListener('click', (e) => {
  let path = e.currentTarget.getAttribute('data-path');

  modals.forEach((el) => {
    el.classList.remove('modal--visible');
  });

  document.querySelector(`[data-target="${path}"]`).classList.toggle('modal--visible');
  modalOverlay.classList.toggle('modal-overlay--visible');
  document.body.classList.toggle('stop-scroll');
});
