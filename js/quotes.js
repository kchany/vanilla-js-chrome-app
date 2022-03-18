/*
작성자 : Chany
작성 시작일 : 22. 03. 19
최종 수정일 : 22. 03. 19
*/

// 웹 페이지에 보여줄 명언 배열 생성 (배열 내부에 객체를 가지고 있는 객체 배열 형태)
const quotes = [
  {
    quote: '성공한 사람이 아니라 가치있는 사람이 되기위해 힘쓰라.',
    author: 'Albert Einstein',
  },
  {
    quote: '게으름은 즐겁지만 괴로운 상태다. 우리는 행복해지기 위해서 무엇인가를 하고 있어야 한다.',
    author: 'Mohandas Karamchand Gandhi',
  },
  {
    quote:
      '아무 하는 일 없이 시간을 허비하지 않겠다고 맹세하라. 우리가 항상 뭔가를 한다면 놀라우리만치 많은 일을 해낼 수 있다.',
    author: 'Thomas Jefferson',
  },
  {
    quote: '끊임없이 노력하라. 체력이나 지능이 아니라 노력이야말로 잠재력의 자물쇠를 푸는 열쇠다.',
    author: 'Sir Winston Leonard Spencer-Churchill',
  },
  {
    quote: '나는 실패한 적이 없다. 그저 작동하지 않는 만 개의 방법을 발견했을 뿐이다.',
    author: 'Thomas Alva Edison',
  },
  {
    quote: '하늘은 스스로 돕는자를 돕는다.',
    author: '맹자',
  },
  {
    quote: '인내와 끈기와 피나는 노력은 성공을 안겨주는 무적불패의 조합이다.',
    author: 'Napoleon Hill',
  },
  {
    quote:
      '탁월하다는 것을 아는 것만으로는 충분치 않으며, 탁월해지기 위해, 이를 발휘하기 위해 노력해야한다.',
    author: 'Aristotle',
  },
  {
    quote: '신은 우리가 성공할 것을 요구하지 않는다. 우리가 노력할 것을 요구할 뿐이다.',
    author: 'Mother Teresa Bojaxhiu',
  },
  {
    quote: '천재는 1%의 영감과 99%의 노력이다.',
    author: 'Thomas Alva Edison',
  },
  {
    quote:
      '멋진 아이디어가 떠올랐다면 그것에 몰두하라. 멋지게 실현할 때까지 그것을 끈질기게 물고 늘어져라.',
    author: "Walter Elias 'Walt' Disney",
  },
  {
    quote:
      '천재성은 하늘이 주신 인내심이다. 천재성은 나 역시 가질 수 없지만, 인내심은 모두가 가질 수 있다.',
    author: 'Thomas Woodrow Wilson',
  },
  {
    quote: '훌륭한 평판을 받는 법은 자신이 드러내고자 하는 모습이 되도록 노력하는 것이다.',
    author: 'Socrates',
  },
  {
    quote: '지옥을 겪고 있다면 계속 겪어 나가라',
    author: 'Sir Winston Leonard Spencer-Churchill',
  },
  {
    quote:
      '세상에서 가장 중요한 일들 대부분은 아무도 도와주지 않을 때에도 계속 노력한 사람들에 의해 이루어졌다.',
    author: 'Dale Breckenridge Carnegie',
  },
  {
    quote: '게으르고 나태한 사람은 죽음에 이르고, 애써 노력하는 사람은 죽는 법이 없다.',
    author: '법구경',
  },
  {
    quote: '재주가 비상하고 뛰어나더라도 노력하지 않으면 쓸모없는 것이다.',
    author: 'Michel Eyquem de Montaigne',
  },
  {
    quote:
      '노동이 사람을 죽이는 경우는 없다. 그러나 빈둥거리며 지내는 것은 신체와 생명을 망친다. 새가 날기 위해 태어난 것처럼 인간은 노동을 하기 위해 태어났기 때문이다.',
    author: 'Martin Luther',
  },
  {
    quote:
      '노력은 수단이 아니라 그 자체가 목적이다. 노력하는 것 자체에 보람을 느낀다면 누구든지 인생의 마지막 시점에서 미소를 지을 수 있을 것이다.',
    author: 'Lev Nicolayevich Tolstoy',
  },
];

// HTML 요소 가져오기
const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

// 명언을 랜덤으로 가져오기 위해서 Math.random()에 배열의 길이를 곱한 수 만큼을 정수로 얻고, 해당 배열에 정수번째 원소에 접근
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

// HTML에 텍스트 삽입
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
