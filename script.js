
function docId(id) {
    return document.getElementById(id);
}

function init() {
    renderDishes();
}

function renderDishes() {
    let dishContent = docId('wrapper');
    dishContent.innerHTML = "";

    for (let indexDish = 0; indexDish < dishes.length; indexDish++) {
        const dish = dishes[indexDish];
        dishContent.innerHTML += getDishesTemplate(dish);
    }
}