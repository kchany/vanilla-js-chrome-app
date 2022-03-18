/*
작성자 : Chany
작성 시작일 : 22. 03. 15
최종 수정일 : 22. 03. 18
*/

// HTML의 요소 가져오기
const clock = document.querySelector('h2#clock'); // 시간을 표시할 h2

// 시간 표시를 위한 함수
function getClock() {
  // JS의 날짜를 가져오는 객체
  const date = new Date();
  // HTML 요소에 시간을 넣어주기
  clock.innerText = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
}

// setInterval만 사용해도 1초마다 함수가 실행되긴 하지만,
// 함수를 바로 한 번 호출해주는 이유는, 페이지를 새로고침 했을 때 바로 함수가 실행되도록 하기 위해서
getClock();
setInterval(getClock, 1000);