/*
작성자 : Chany
작성 시작일 : 22. 03. 15
최종 수정일 : 22. 03. 15
*/

// HTML의 요소 가져오기
const loginInput = document.querySelector('#login-form input');
const loginButton = document.querySelector('#login-form button');

// HTML의 login-input 클릭 시 호출
function onLoginBtnClick() {
  console.log(loginInput.value);
}

loginButton.addEventListener('click', onLoginBtnClick);
