"use strict";

// самовызывающаяся функция для header, чтобы он скользил по странице и исчезал наверху
(function () {
  var header = document.querySelector('header');

  window.onscroll = function () {
    if (window.pageYOffset > 50) {
      header.classList.add('header_active');
    } else {
      header.classList.remove('header_active');
    }
  };
})();

var sandwichToggle = function sandwichToggle() {
  // Выбираем элементы, которые нам нужны. В примере мы ищем элементы с классом "sandwich"
  var sandwichElements = document.querySelectorAll('.sandwich'); // Проходим циклом по всем эдементам и на каждый элемент вешаем слушателя, который по клику будет переключать класс

  sandwichElements.forEach(function (item) {
    item.addEventListener('click', showSandwichTarget);
  });

  function showSandwichTarget() {
    var targetId = this.getAttribute('data-target-id'),
        targetClassToggle = this.getAttribute('data-target-class-toggle');
    this.classList.toggle('is-active');

    if (targetId && targetClassToggle) {
      document.getElementById(targetId).classList.toggle(targetClassToggle);
    }
  }
};

sandwichToggle();