/*
작성자 : Chany
작성 시작일 : 22. 03. 15
최종 수정일 : 22. 03. 16
*/

// HTML의 요소 가져오기
const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

// 자주 사용하는 string 저장 변수
const HIDDEN_CLASSNAME = 'hidden';

// HTML의 login-input 클릭 시 호출
function onLoginSubmit(event) {
  // submit의 기본 동작 막기
  event.preventDefault();
  // 입력 받은 user name 저장
  const userName = loginInput.value;
  // form 제출 시, input form은 사라지게
  loginForm.classList.add(HIDDEN_CLASSNAME);
  // Local Storage에 입력받은 username 저장
  localStorage.setItem('username', userName);
  // HTML의 h1에 입력받은 username 넣고, hidden class 사라지게
  greeting.innerText = `Hello ${userName}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

// submit 버튼 클릭시 (이벤트 발생), 함수 호출
loginForm.addEventListener('submit', onLoginSubmit);
