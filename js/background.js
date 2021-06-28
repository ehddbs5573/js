const backgroundArrey = ["img/1.webp","img/2.webp","img/3.jpg"]

const background = backgroundArrey[Math.floor(Math.random() * backgroundArrey.length)];

const bgImage = document.createElement("img");  
// js로 html을 만들었다.

bgImage.src=background;
// <img src="" />의 src=""에 이미지 파일넣었다.

document.body.appendChild(bgImage);
//html의 <body>안에 <img />를 추가했다.
