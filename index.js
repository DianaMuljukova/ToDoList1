var popup = document.querySelector('.popup');

var popupOpen = document.querySelector('.btn');

var popupClose = document.querySelector('.new_task_btn');

var wrapper = document.querySelector('.back');

var cover = document.querySelector('.cover');


popupOpen.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('popup-open');
  cover.classList.add('show');

});

popupClose.addEventListener('click', function () {
  popup.classList.remove('popup-open');
  cover.classList.remove('show');
});

console.log(1);
document.addEventListener('keydown', function (event) {
  console.log(event);
  if (event.key === 'Escape') {
    popup.classList.remove('popup-open');
    cover.classList.remove('show');

  }
});