// <!-- From Uiverse.io by JasonMep --> Button


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
            <h3 class="headline-dish-info-box">${dishInfo.name}</h3>
            <button class="gen-button">✛</button>

        </div>

        <div class="desc-price-container">
            <p class="p-style-dishBoxes">${dishInfo.description}</p>
            <h3>${dishInfo.price} €</h3>
        </div>

    `
}