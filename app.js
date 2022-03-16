/*
작성자 : Chany
작성 시작일 : 22. 03. 15
최종 수정일 : 22. 03. 16
*/

// HTML의 요소 가져오기
const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');

// HTML의 login-input 클릭 시 호출
function onLoginSubmit(event) {
  event.preventDefault();
  console.log(loginInput.value);
}

loginForm.addEventListener('submit', onLoginSubmit);
