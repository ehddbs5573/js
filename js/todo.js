const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

toDoForm.addEventListener("submit",handleToDoSubmit);

function paintToDo(newToDo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText=newToDo;
    const btn = document.createElement("button");
    btn.innerText="❌";
    btn.addEventListener("click",deleteToDo);

    function deleteToDo(event){
        span.innerText="finish";
        console.log(event);
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
    
    paintToDo(newToDo);
}