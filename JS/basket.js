let basket = [];

function renderBasket() {
    let basketContentRef = docId('basketContent');
    basketContentRef.innerHTML = "";
    basketContentRef.innerHTML += getBasketTemplate();
}