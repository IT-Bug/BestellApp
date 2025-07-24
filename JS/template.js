
function getDishesTemplate(dish) {
    return `
    <article id="dish${dish.id}" class="dish-box">
        <div class="dish-image-headline">
            ${dish.backgroundImg ? `<img id="dishImg${dish.id}" class="dish-bg-img" src="${dish.imgDish}" alt="${dish.name}" >
            <h3>${dish.headline}</h3>
            <div class="x-stripe-container">
                <div class="horizontal-strip"></div>
            </div>
            ` : ""} 
        </div>

        <div class="dish-name-btn">
            <h3>${dish.name}</h3>
            <button onclick="addDishBasket()"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg></button>
        </div>
        
        <div class="dish-description-price">
            <span>${dish.description}</span>
            <p>${dish.price.toFixed(2)} €</p>
        </div>
    </article>
    `;
}

function getBasketTemplate() {
    return `
    <div class="basket-headline">
        <h2>Warenkorb</h2>
    </div>

    <div class="option-container">
        <div class="option-btn" onclick="deliveryOption()">
            <img src="../assets/logos/carblack.png" id="checkboxDelivery" >
            <span>Liefern</span>
        </div>

        <div class="option-btn"  onclick="pickupOption()">
            <img src="../assets/logos/handbasketblack.png" id="checkboxPickup" class="ui-checkbox">
            <span>Abholung</span>
        </div>
    </div>

    <div id="basketInfo"> 
        <img src="../assets/logos/basket.png" height="50px" alt="warenkorb logo"/>
        <h3>Vergiss nicht dein Warenkorb zu füllen</h3><br>
        <p>
            Suche deine Lieblingsgerichte aus oder probier etwas Neues, pack
            die Gerichte in dein Warenkorb und bestelle dein Essen.
        </p>
    </div>
    
    <div class="order-container">
        <button>Bestellung aufgeben</button>
    </div>

    `;
}