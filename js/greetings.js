/*
작성자 : Chany
작성 시작일 : 22. 03. 15
최종 수정일 : 22. 03. 18
*/

// HTML의 요소 가져오기
const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

// 자주 사용하는 string 저장 변수
const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

// 새로운 변수
const savedUsername = localStorage.getItem(USERNAME_KEY); // Local Storage에 저장된 사용자 이름

// 상황에 따라 동작하는 로직
// Local Storage가 비어있으면 (유저 이름 없음)
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  // submit 버튼 클릭시 (이벤트 발생), 함수 호출
  loginForm.addEventListener('submit', onLoginSubmit);
}
// Local Storage에 유저 이름이 있으면
else {
  // HTML의 h1에 입력받은 username 넣고, hidden class 사라지게
  paintGreetings();
}

// 동작하는 함수들

// HTML의 login-input 클릭 시 호출 (입력 받은 username Local Storage에 저장하고, Greeting 메시지 표시)
function onLoginSubmit(event) {
  // submit의 기본 동작 막기
  event.preventDefault();
  // form 제출 시, input form은 사라지게
  loginForm.classList.add(HIDDEN_CLASSNAME);
  // Local Storage에 입력받은 username 저장
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  // HTML의 h1에 입력받은 username 넣고, hidden class 사라지게
  paintGreetings();
}

// submit 버튼 클릭시, 또는 이미 Local Storage에 유저 이름이 있는 경우 호출
// HTML의 h1에 입력받은 username 넣고, hidden class 사라지게하는 함수
function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
