const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
    title.classList.toggle("clicked");
}

function init(){
    title.addEventListener("click", handleClick);
}

init();