const loginForm=document.querySelector("#login-form");
const loginInput=loginForm.querySelector("input");
const loginBtn=loginForm.querySelector("button");
const greeting=document.querySelector("#greeting");


function onLoginSubmit(event){
    const HIDDEN_CLASSNAME = "hidden"

    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText=`welcome to ${username}`;

    localStorage.setItem("username",username);
    
}


loginForm.addEventListener("submit",onLoginSubmit);
