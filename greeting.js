const form = document.querySelector(".js-form"),
input = form.querySelector("input"),
greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem("currentUser", text);
}

function handleSubmit(event){
    event.preventDefault(); // 이벤트의 기본 동작을 막는행위 여기선 엔터누를때 텍스트가 비는거 막음
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null){
        //user is not
        askForName();
    }
    else{
        //uswer is
        paintGreeting(currentUser);
    }
}

function init(){
loadName();
}
init();