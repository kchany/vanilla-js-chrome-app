/*
작성자 : Chany
작성 시작일 : 22. 03. 19
최종 수정일 : 22. 03. 19
*/

// 배경으로 사용할 이미지 배열 (img 폴더 안의 이름과 일치해야 함)
const images = ['0.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg'];
// 배열의 원소에 랜덤으로 접근
const backgroundImage = images[Math.floor(Math.random() * images.length)];
// createElement를 이용해 img태그 생성
const bgImg = document.createElement('img');
// img 태그의 src 속성 만들어주기
bgImg.src = `/img/${backgroundImage}`;
// appendChild를 이용해 body에 요소 추가
document.body.appendChild(bgImg);
