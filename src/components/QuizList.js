const QuizList = [{
    id: 1,
    question: "HTML의 의미를 보기에서 고르세요!",
    answer: "Hyper Text Markup Language",
    view: {
      number1: "Hyperlinks and Text Markup Language",
      number2: "Home Tool Markup Language",
      number3: "Hyper Text Markup Language",
      number4: "Hyperlinks Tool Markup Language"
    },
    hint: "하이퍼텍스트 마크업 언어입니다.",
    type: "html"
  },
  {
    id: 2,
    question: "HTML에서 구조 내 주석을 올바르게 표현한 것은?",
    answer: "<!--주석-->",
    view: {
      number1: "<!--주석-->",
      number2: "/*주석*/",
      number3: "//주석",
      number4: "{/*주석*/}"
    },
    hint: "HTML 내 주석 사용법은 기본적으로 여는 태그부터 시작합니다.",
    type: "html"
  },
  {
    id: 3,
    question: "태그 요소 중 div 태그는 어떤 이름의 약어인가요?",
    answer: "Division",
    view: {
      number1: "Division",
      number2: "Discount",
      number3: "Direct",
      number4: "Div"
    },
    hint: "분할하다라는 뜻을 가지고 있습니다.",
    type: "html"
  },
  {
    id: 4,
    question: "태그 요소 중 p 태그는 어떤 이름의 약어인가요?",
    answer: "Paragraph",
    view: {
      number1: "Paragraph",
      number2: "ParaPara",
      number3: "Picture",
      number4: "Page"
    },
    hint: "w3c",
    type: "html"
  },
  {
    id: 5,
    question: "누가 웹 표준을 만들고 있습니까?",
    answer: " The World Wide Web Consortium",
    view: {
      number1: " The World Wide Web Consortium",
      number2: "Google",
      number3: "Microsoft",
      number4: "Mozilla"
    },
    hint: "w3c",
    type: "html"
  },
  {
    id: 6,
    question: "CSS의 의미를 보기에서 고르세요",
    answer: "Cascading Style Sheets",
    view: {
      number1: "Cascading Style Sheets",
      number2: "Computer Style Sheets",
      number3: "Creative Style Sheets",
      number4: "Colorful Style Sheets"
    },
    hint: "폭포가 되어 떨어지다.",
    type: "css"
  },
  {
    id: 7,
    question: "HTML 내 자바스크립트 태그를 이용해 사용하고자 한다 올바른 사용법은?",
    answer: "<script></script>",
    view: {
      number1: "<javascript></javascript>",
      number2: "<script></script>",
      number3: "<js></js>",
      number4: "<scripting></scripting>"
    },
    hint: "스크립트 태그를 이용합니다.",
    type: "js"
  },
  {
    id: 8,
    question: "<p id='demo'>테스트 글자</p>에서 테스트 글자를 변경하고자 한다 올바른 방법은?",
    answer: "document.getElementById('demo').innerHtml = 'Hello World!';",
    view: {
      number1: "document.getElementById('demo').innerHtml = 'Hello World!';",
      number2: "document.getElement('p')..innerHtml = 'Hello World!';",
      number3: "#demo.innerHtml = 'Hello World!';",
      number4: "document.getElementByName('p').innerHtml = 'Hello World!';"
    },
    hint: "고유의 아이디값을 선택해서, 글자를 변경합니다.",
    type: "js"
  },
  {
    id: 9,
    question: "경고창을 띄우고자 한다. 올바른 방법은?",
    answer: "alert('경고')",
    view: {
      number1: "alert('경고')",
      number2: "msg('경고')",
      number3: "msgBox('경고')",
      number4: "alertBox('경고')"
    },
    hint: "경고창은 알리다라는 영어 단어를 사용합니다.",
    type: "js"
  },
  {
    id: 10,
    question: "flexbox를 적용하고자 하는 요소로 올바른 것은?",
    answer: "부모요소",
    view: {
      number1: "부모요소",
      number2: "자식요소",
      number3: "최상위",
      number4: "상관없음"
    },
    hint: "w3c",
    type: "css"
  },
  {
    id: 11,
    question: "for 반복문을 사용할 때 올바른 방법은?",
    answer: "for(i=0;i<5;i++)",
    view: {
      number1: "for(i=0;i<5;i++)",
      number2: "for i = 1 to 5",
      number3: "for(i < 5; i++)",
      number4: "for(i=0;i<5)"
    },
    hint: "변수명,조건문,증감(가감)",
    type: "js"
  },
  {
    id: 12,
    question: "HTML내 자바스크립트 파일을 링크해서 사용하고자 한다 올바른 방법은?",
    answer: "<script src='script.js'>",
    view: {
      number1: "<script src='script.js'>",
      number2: "<script href='script.js'>",
      number3: "<script name='script.js'>",
      number4: "<script type='script.js'>"
    },
    hint: "태그 내 소스 속성을 활용합니다.",
    type: "js"
  },
  {
    id: 13,
    question: "HTML 내 CSS를 적용하고자 한다. 올바른 방법은?",
    answer: "<style></style>",
    view: {
      number1: "<style></style>",
      number2: "<css></css>",
      number3: "<text/css></text/css>",
      number4: "<stylesheet></stylesheet>"
    },
    hint: "스타일을 변경하도록 스타일 태그 요소를 사용합니다.",
    type: "css"
  },
  {
    id: 14,
    question: "HTML내 CSS 파일을 링크해서 사용하고자 한다 올바른 방법은?",
    answer: "<link rel='stylesheet' href='mystyle.css'>",
    view: {
      number1: "<link rel='stylesheet' href='mystyle.css'>",
      number2: "<link rel='stylesheet' name='mystyle.css'>",
      number3: "<link rel='stylesheet' src='mystyle.css'>",
      number4: "<link rel='stylesheet' type='mystyle.css'>"
    },
    hint: "스타일 시트는 하이퍼링크 속성을 사용합니다.",
    type: "css"
  },
  {
    id: 15,
    question: "css를 활용해 배경색을 변경하고자 한다 올바른 속성은?",
    answer: "background-color",
    view: {
      number1: "background-color",
      number2: "backgroundColor",
      number3: "backcolor",
      number4: "<link rel='stylesheet' type='bgcolor'>"
    },
    hint: "배경-색 속성을 사용합니다. ",
    type: "css"
  }
]

export default QuizList;