
let tabsBtn = document.querySelectorAll(".team .button__for");
let tabsItem = document.querySelectorAll(".team__swipers");

tabsBtn.forEach(function (element) {
  element.addEventListener("click", function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) {
      btn.classList.remove("button-for--active");
    });

    e.currentTarget.classList.add("button-for--active");

    tabsItem.forEach(function (element) {
      element.classList.remove("team--active");
    });
    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("team--active");
  });
});

let tabsBtn2 = document.querySelectorAll(".here__button");
let tabsItem2 = document.querySelectorAll(".here__right");
let tabsItem3 = document.querySelectorAll(".here__description");

tabsBtn2.forEach(function (element) {
  element.addEventListener("click", function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn2.forEach(function (btn) {
      btn.classList.remove("here-btn--active");
    });
    e.currentTarget.classList.add("here-btn--active");
    tabsItem2.forEach(function (element) {
      element.classList.remove("block--active");
    });
    tabsItem3.forEach(function (element) {
      element.classList.remove("description--active");
    });
    document.querySelectorAll(`[data-target="${path}"]`).forEach((el) => {
      if (el.classList.contains("here__right")) {
        el.classList.add("block--active");
      }
      if (el.classList.contains("here__description")) {
        el.classList.add("description--active");
      }
    })
  });
});

let tabsBtn4 = document.querySelectorAll(".algorithm__btn");
let tabsItem4 = document.querySelectorAll(".algorithm__content");

tabsBtn4.forEach(function (element) {
  element.addEventListener("click", function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn4.forEach(function (btn) {
      btn.classList.remove("algorithm-btn--active");
    });

    e.currentTarget.classList.add("algorithm-btn--active");

    tabsItem4.forEach(function (element) {
      element.classList.remove("algorithm--active");
    });

    let targ = document.querySelectorAll(`[data-target="${path}"]`);

    targ.forEach((e) => {
      e.classList.add("algorithm--active");
    })


  });
});

let tabsBtn5 = document.querySelectorAll(".algorithm__btn-child");
let tabsItem5 = document.querySelectorAll(".algorithm__content-child");

tabsBtn5.forEach(function (element) {
  element.addEventListener("click", function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn5.forEach(function (btn) {
      btn.classList.remove("algorithm-btn--active");
    });

    e.currentTarget.classList.add("algorithm-btn--active");

    tabsItem5.forEach(function (element) {
      element.classList.remove("algorithm--active");
    });
    let targ = document.querySelectorAll(`[data-target="${path}"]`);

    targ.forEach((e) => {
      e.classList.add("algorithm--active");
    })
  });
});


let check = document.querySelector(".algorithm .switch-descr");
let adult = document.querySelector(".algorithm .for-adult");
let child = document.querySelector(".algorithm .for-child");
let input = document.querySelector(".algorithm .input");
let adultContent = document.querySelector(".algorithmAdult");
let childContent = document.querySelector(".algorithmChild");

check.addEventListener("click", () => {
  if (input.checked === false) {
    input.checked = true;
    adult.style.color = "var(--black)";
    child.style.color = "var(--white)";
    adultContent.classList.remove("algorithm--active");
    childContent.classList.add("algorithm--active")
  } else {
    input.checked = false;
    adult.style.color = "var(--white)";
    child.style.color = "var(--black)";
    childContent.classList.remove("algorithm--active");
    adultContent.classList.add("algorithm--active")
  }
})

let check2 = document.querySelector(".team .switch-descr");
let adult2 = document.querySelector(".team .for-adult");
let child2 = document.querySelector(".team .for-child");
let input2 = document.querySelector(".team .input");
let adultContent2 = document.querySelector(".teamAdult");
let childContent2 = document.querySelector(".teamChild");

check2.addEventListener("click", () => {
  if (input2.checked === false) {
    input2.checked = true;
    adult2.style.color = "var(--black)";
    child2.style.color = "var(--white)";
    adultContent2.classList.remove("team--active");
    childContent2.classList.add("team--active")
  } else {
    input2.checked = false;
    adult2.style.color = "var(--white)";
    child2.style.color = "var(--black)";
    childContent2.classList.remove("team--active");
    adultContent2.classList.add("team--active")
  }
})