

function getImageTemplate(i){
    let imageDish = dishes[i];

    return `
        <img src="${imageDish.imgDish}" alt="">
    `
}

function getHeadlineTemplate(i){
    let headlineDish = dishes[i];

    return `
        <h2>${headlineDish.headline}</h2>
    `
}

function getTemplateMenu(){

}