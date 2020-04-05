const body = document.querySelector("body");

const IMG_NUMBER = 3;

//api로 불러올때 이미지 뚝뚝뚝 끊기는걸 막기 위해서
// function handleImgLoad(){
//     console.log("finished loading");
// }
// function paintImage(imgNumber){
//     const image = new Image();
//     image.src = `Images/${imgNumber+1}.jpg`;
//     image.addEventListener("loadend", handleImgLoad);
// }

//로컬에서 불러올땐 이렇게 해도 이미지가 뚝뚝뚝 끊어 나오지 않음
function paintImage(imgNumber){
    const image = new Image();
    image.src = `Images/${imgNumber+1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}



function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();