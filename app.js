const loginForm=document.querySelector("#login-form");
const loginInput=loginForm.querySelector("input");

function onLoginSubmit(){
    const username = loginInput.value;
    console.log(username);
}

loginForm.addEventListener("submit",onLoginSubmit);