
let currentDishesIndex = 0;

function init(){
    renderImage();
    renderHeadline();
    // renderContent();
}

function renderImage(){
    let dishImageRef = document.getElementById('imageDishBox');
    dishImageRef.innerHTML = "";
    dishImageRef.innerHTML = getImageTemplate(currentDishesIndex);
}

function renderHeadline(){
    let dishHeadlineRef = document.getElementById('headlineDishBox');
    dishHeadlineRef.innerHTML = "";
    dishHeadlineRef.innerHTML = getHeadlineTemplate(currentDishesIndex);
}

function renderContent() {
    let dishContentRef = document.getElementById('dishBox');
    dishContentRef.innerHTML = "";
    dishContentRef.innerHTML = getTemplateMenu(currentDishesIndex);
}