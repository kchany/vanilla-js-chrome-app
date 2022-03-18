/*
작성자 : Chany
작성 시작일 : 22. 03. 18
최종 수정일 : 22. 03. 19
*/

// HTML의 요소 가져오기
const calendar = document.querySelector('h2#calendar'); // 날짜를 표시할 h2
const clock = document.querySelector('h2#clock'); // 시간을 표시할 h2

// 시간 표시를 위한 함수
function getClock() {
  // JS의 날짜를 가져오는 객체
  const date = new Date();
  // HTML 요소에 시간을 넣어주기
  // 각각의 요소를 String으로 변환해주는 이유는 padStart를 사용하기 위함이다.
  // padStart는 문자열에만 적용할 수 있는 함수이다.
  const years = String(date.getFullYear());
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  calendar.innerText = `${years}. ${month}. ${day}`;
  clock.innerText = `${hours} : ${minutes} : ${seconds}`;
}

// setInterval만 사용해도 1초마다 함수가 실행되긴 하지만,
// 함수를 바로 한 번 호출해주는 이유는, 페이지를 새로고침 했을 때 바로 함수가 실행되도록 하기 위해서
getClock();
setInterval(getClock, 1000);
