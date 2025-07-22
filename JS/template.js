
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