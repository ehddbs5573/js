const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

toDoForm.addEventListener("submit",handleToDoSubmit);

function paintToDo(newToDo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText=newToDo;
    const btn = document.createElement("button");
    btn.innerText="❌";
    btn.addEventListener("click",deleteToDo);

    function deleteToDo(event){
        //console.log(event.target.parentElement);
        //누른 대상의 부모를 알수있다.
        //console.log(event.target.parentElement.innerText);
        //클릭된 대상의 content를 알수있다.
        const li = event.target.parentElement;
        // 누른 대상의 부모<li>를 변수에 넣는다.
        li.remove();
        //변수를 제거한다. -> li이 제거됨 -> x버튼 누르면 해당 list가 제거된다.
    }
    
    li.appendChild(span);
    //appendChild()가 있는 줄은 맨 마지막에 있어야한다.
    // html담은 변수.appendChild(html 담은변수2);
    //<li>안에 <span>넣는법

    li.appendChild(btn);

    toDoList.appendChild(li);
    //<ul>안에 <li>추가 했다.
    
}

function handleToDoSubmit(event){
    event.preventDefault();
    //submit하면 새로고침되는 기본 동작 막음

    const newToDo = toDoInput.value;
    //<input />의 값을 변수에 넣음
    
    toDoInput.value = "";
    // <input/>에 값을 입력하고 enter를 눌러서 submit하면 다시 빈칸이되서 다시 입력할수 있다. 
    
    toDos.push(newToDo);
    //<input />에 저장된 값을 arrey에 저장시킨다.

    paintToDo(newToDo);

    saveToDos();
    // arrey를 localStorage에 저장한다. 
}

const TODOS_KEY = "todos";

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
    //JSON.stringify(toDos) arrey인 toDos를 string로 바꿔서 localStorage에 저장시키려고함
    //JSON.stringify(toDos)안쓸때 예시 a,b,c입력 -> a,b,c저장
    //JSON.stringify(toDos)쓸때 예시 a,b,c입력 -> ["a","b","c"]

    //Json.parse(); string -> arrey
}

const savedToDos = localStorage.getItem(TODOS_KEY);


if(savedToDos!==null){
    const parsedToDos = JSON.parse(savedToDos);
    //localStorag에 저장된 값을 가진 변수는 string이었다.
    //ㄴ참고 -> localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
    //string을 JSON.parse(savedToDos)을 이용하여 arrey로 바꿈 
    
    parsedToDos.forEach((item) => console.log("this is ",item));
    //arrey의 요소들을 console.log("this is ",item)에 대입한다.
    
    //다르게 쓰는법 
    //parsedToDos.forEach(sayItem);
    //arrey의 각각 요소에 함수를 쓰게한다
    //js가 함수를 써야하므로 ()를빼고 대입한다.
}

function sayItem(item){
    console.log(item);
    //item은 지금 처리되고 있는 데이터를 말한다 -> 이 함수가 쓰이는 곳을 봐라 -> localStorage에 저장된 값들
}