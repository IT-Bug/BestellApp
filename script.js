
let currentDishesIndex = 0;

function init(){
    renderImage();
    renderHeadline();
    renderInfoBox();
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

function renderInfoBox(){
    let dishInfoBoxRef = document.getElementById('descriptionContent');
    dishInfoBoxRef.innerHTML = "";
    dishInfoBoxRef.innerHTML = getDishInfoBoxTemplate(currentDishesIndex);
}