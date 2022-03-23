/*
작성자 : Chany
작성 시작일 : 22. 03. 23
최종 수정일 : 22. 03. 23
*/

// HTML 요소 가져오기
const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.getElementById('todo-list');

// 새로운 변수
let toDos = [];
const TO_DO_KEY = 'toDos';

// To Do List를 Local Storage에 저장하는 함수
function saveToDos() {
  // Local Storage에는 오로지 string 형태만이 들어갈 수 있다.
  // 하지만 우리는 배열의 형태로 Local Storage에 저장하고 싶기 때문에,
  // JSON.stringify를 이용한다.
  localStorage.setItem(TO_DO_KEY, JSON.stringify(toDos));
}

// To Do List를 삭제하는 함수
function deleteToDo(event) {
  // deleteToDo 함수의 역할은, 삭제 버튼이 클릭되었을 때, 해당 이벤트를 감지해서 어느 li가 클릭되었는지를 파악하고,
  // 해당 li를 삭제하는 것이다.

  // click event가 발생한 곳의 부모 요소를 찾고, 해당 버튼의 부모 li를 지운다.
  const li = event.target.parentElement;
  li.remove();
}

// To Do List를 그리는 함수
function paintToDo(newToDo) {
  // 우리가 List에 넣을 HTML 요소들 (새로운 To Do가 입력되면, ul 안에 li 안의 span을 만들어 넣고 싶다.)
  const li = document.createElement('li');
  const span = document.createElement('span');
  // span의 내용을 사용자가 입력한 To Do로 넣어준다.
  span.innerText = newToDo;
  // span과 함께 해당 to do list를 삭제할 수 있는 버튼도 같이 넣어준다.
  // 삭제 버튼은 클릭 이벤트를 감지해서 해당 버튼이 클릭된 곳의 li를 지워주는 함수를 호출한다.
  const button = document.createElement('button');
  button.innerText = '❌';
  button.addEventListener('click', deleteToDo);
  // li의 안에 span과 삭제 button을 넣어준다.
  li.appendChild(span);
  li.appendChild(button);
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

  // Local Storage에 저장하기 위해서 배열에 input 값을 넣는다.
  toDos.push(newToDo);
  // 입력 받은 내용으로 To Do List를 그리는 함수 호출
  paintToDo(newToDo);
  // 배열을 Local Storage에 저장하는 함수 호출
  saveToDos();
}

// submit event를 감지
toDoForm.addEventListener('submit', handleToDoSubmit);

// Local Storage에 있는 to do list 배열을 불러오기
const savedToDos = localStorage.getItem(TO_DO_KEY);

// Local Storage에 toDos가 존재하는 경우 실행
if (savedToDos !== null) {
  // JSON. parse를 이용해 string 형태의 배열을 진짜 사용가능한 배열로 바꾸어준다.
  const parsedToDos = JSON.parse(savedToDos);
  // 이전에 Local Storage에 저장되어있던 toDos 배열을 가져오기
  toDos = parsedToDos;
  // 배열 안에 있는 각각의 item들에 paintToDo 함수를 실행
  parsedToDos.forEach(paintToDo);
}
