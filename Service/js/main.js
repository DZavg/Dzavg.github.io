let tabBtn = document.querySelectorAll('.tab__button');

tabBtn.forEach(function (item) {
   item.addEventListener('click', function () {
      let tabId = item.getAttribute("data-tab");
      let tab = document.querySelector(tabId);
      let tabs = document.querySelectorAll('.tab__info');
      tab.classList.toggle('tab__info_active');
   });
});

let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__menu');
burger.onclick = function () {
   menu.classList.toggle('header__menu_active');
   burger.classList.toggle('header__burger_active');
}


