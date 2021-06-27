const loginForm=document.querySelector("#login-form");
const loginInput=loginForm.querySelector("input");
const loginBtn=loginForm.querySelector("button");
const greeting=document.querySelector("#greeting");
const USERNAME_KEY= "username";
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event){

    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    
    localStorage.setItem(USERNAME_KEY,loginInput.value);

    paintGreeting();
    
}




const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername===null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}
else {
    paintGreeting();
}

function paintGreeting(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText=`welcome to ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}