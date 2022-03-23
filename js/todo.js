/*
작성자 : Chany
작성 시작일 : 22. 03. 23
최종 수정일 : 22. 03. 23
*/

// HTML 요소 가져오기
const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.getElementById('todo-list');

// To Do List를 그리는 함수
function paintToDo(newToDo) {
  // 우리가 List에 넣을 HTML 요소들 (새로운 To Do가 입력되면, ul 안에 li 안의 span을 만들어 넣고 싶다.)
  const li = document.createElement('li');
  const span = document.createElement('span');

  // li의 안에 span을 넣어준다.
  li.appendChild(span);
  // span의 내용을 사용자가 입력한 To Do로 넣어준다.
  span.innerText = newToDo;
  // 마지막으로, HTML에서 만들어놓은 ul에 li를 넣어준다.
  toDoList.appendChild(li);
}

// toDoForm 에서 submit event가 발생했을 때 동작하는 함수
function handleToDoSubmit(event) {
  // submit event의 새로고침을 막고
  event.preventDefault();

  // 입력된 input의 값을 새로운 변수에 저장하고
  const newToDo = toDoInput.value;
  // input을 비운다.
  toDoInput.value = '';
  // 입력 받은 내용으로 To Do List를 그리는 함수 호출
  paintToDo(newToDo);
}

// submit event를 감지
toDoForm.addEventListener('submit', handleToDoSubmit);
