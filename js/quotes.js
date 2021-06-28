const quotes = [
    {
        quote : "인생의 실패자들은 포기할 때 자신이 성공에서 얼마나 가까이 있었는지 모른다.",
        author : "토마스 에디슨"
    },
    {
        quote : "절대 안 된다는 말은 하지 말아라. 한계는 두려움과 마찬가지로 환상일 뿐이다.",
        author: "마이클 조던"},
    {
        quote : "만약 당신이 한 번도 두렵거나 굴욕적이거나 상처 입은 적이 없다면, 그렇다면 당신은 아무런 위험도 감수하지 않은 것이다.",
        author: "줄리아 소렐"},
    {
        quote : "네 밑음은 네 생각이 된다 네 생각은 네 말이 된다. 네 말은 네 행동이 된다. 네 행동은 네 습관이 된다. 네 습관은 네 가치가 된다. 네 가치는 네 운명이 된다.",
        author:"마하트마 간디"
    },
    {
        quote : "마찰 없이 보석을 광나게 할 수 없듯, 시련 없이 사람을 완전하게 할 수 없습니다.",
        author: "에이브러햄 링컨"},

    {
        quote : "일은 당신 인생의 많은 부분을 채울 것이다. 그래서 진정 만족을 얻으려면 당신이 생각하기에 위대한 일을 해야 한다. 위대한 일을 하는 유일한 방법은 당신이 이 일을 진짜 사랑하는 것이다. 아직 찾지 못했다면 계속해서 찾아라. 타협하지 마라. 모든 일이 그렇듯 제대로 찾았다면 당신 마음이 알게 될 것이다.",
        author:"스티븐 잡스"
    },
    {
        quote : "남의 조그만 허물을 꾸짖지 말고, 남의 비밀을 드러내지 말고, 남의 지난 날의 잘못을 생각하지 마라. 이 세 가지는 가히 덕을 기르며, 또한 해로움을 멀리 할 것이다",
        author:"채근담"},
    {
        quote : "최선을 다하고 있다고 말해봤자 소용없다. 필요한 일을 함에 있어서는 반드시 성공해야 한다",
        author:"윈스턴 처칠"},
    {
        quote : "오늘 할 수 있는 일을 내일로 미루지 마라",
        author: "벤자민 프랭클린"},
    {
        quote : "이미 끝난 일을 말하여 무엇하며 이미 지나간 일을 비난하여 무엇하리.",
        author:"공자" 
    }


]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const toDaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = toDaysQuote.quote;
author.innerText = toDaysQuote.author;
