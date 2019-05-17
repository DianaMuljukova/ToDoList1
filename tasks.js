var list = document.querySelector('.list tbody'); //общий список

var items = list.children; //строки
console.log(items);

var message = document.querySelector('.message'); //окно, появляющееся, когда нет задач



function showMessage() {

  if (items.length === 0) {
    message.classList.remove('hidden');
  } else {
    message.classList.add('hidden');
  }
};


// удаляет выполненную задачу
function checkTask(item) {
  var checkbox = item.querySelector('.checkbox');

  checkbox.addEventListener('change', function () {

    item.remove();
    showMessage();
  });
}

for (var i = 0; i < items.length; i++) {
  checkTask(items[i]);
}

