let tabBtn = document.querySelectorAll('.tab__button');

tabBtn.forEach(function (item) {
   item.addEventListener('click', function () {
      let tabId = item.getAttribute("data-tab");
      let tab = document.querySelector(tabId);
      let tabs = document.querySelectorAll('.tab__info');
      tab.classList.toggle('tab__info_active');
   });
});


