

function getImageTemplate(i){
    let imageDish = dishes[i];
    let imageBackground = document.getElementById('imageDishBox'); 

    if (!imageDish.backgroundImg == true) {
        imageBackground.classList.add('display-none')
    }

    return `
        <img class="image-size-dishbox" src="${imageDish.imgDish}" alt="Das Gericht als Bild">
    `
}

function getHeadlineTemplate(i){
    let headlineDish = dishes[i];

    return `
        <h2 class="headline-style" >${headlineDish.headline}</h2>
    `
}

function getDishInfoBoxTemplate(i){
    let dishInfo = dishes[i];

    return `
        <div class="name-btn-container">
            <h3>${dishInfo.name}</h3>
            <button>+</button>
        </div>
    `
}