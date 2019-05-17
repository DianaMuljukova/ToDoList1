var form  = document.querySelector('.task__form'); //форма в попапе

var input = form.querySelector('.new_task_text'); //вводимый текст в попапе

var timeData = form.querySelector('.new_task_time'); // время, вводимое в попапе

var template = document.querySelector('#task-template').content;
var newTemplateItem = template.querySelector('.list__row');




form.addEventListener('submit', function (evt) {
  evt.preventDefault();


  var newText = input.value;

  var task = newTemplateItem.cloneNode(true);
  var taskDescription = task.querySelector('.add');
  taskDescription.textContent = newText;


  var time = timeData.value;
  time = parseFloat(time);

  if (time >= 12) {

    time = timeData.value + ' pm';

  } else {
    time = timeData.value + ' am';

  }


  var timeDescription = task.querySelector('.time');
  timeDescription.textContent = time;

  checkTask(task);
  console.log(task);
  list.appendChild(task);
  showMessage();
  input.value = '';



});
