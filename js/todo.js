/*
작성자 : Chany
작성 시작일 : 22. 03. 23
최종 수정일 : 22. 03. 23
*/

// HTML 요소 가져오기
const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.getElementById('todo-list');

// toDoForm 에서 submit event가 발생했을 때 동작하는 함수
function handleToDoSubmit(event) {
  // submit event의 새로고침을 막고
  event.preventDefault();
  // 입력된 input의 값을 새로운 변수에 저장하고
  const newToDo = toDoInput.value;
  // input을 비운다.
  toDoInput.value = '';
}

// submit event를 감지
toDoForm.addEventListener('submit', handleToDoSubmit);
