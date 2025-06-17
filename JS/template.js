// <!-- From Uiverse.io by JasonMep --> Button

function getDishBoxTemplate(dish) {
  let dishesMenu = "";

    // Dish Image and Headline

    if (dish.backgroundImg) {
      
        dishesMenu += `
        <div class="dishes-container">
        <div class="dish-box">
            <div id="imageDishBox">
                <img class="image-size-dishbox" src="${dish.imgDish}" alt="Das Gericht als Bild">
            </div>
            <div id="headlineDishBox">
                <h2 class="headline-style" >${dish.headline}</h2>
            </div>
            <div class="x-stripe-container">
                <div class="horizontal-strip"></div>
            </div>

        <div class="name-btn-container">
            <h3 class="headline-dish-info-box">${dish.name}</h3>
            <button class="gen-button">✛</button>
        </div>
        
        <div class="discription-container">
            <div class="desc-price-container">
                <p class="p-style-dishBoxes">${dish.description}</p>
                <h3>${dish.price.toFixed(2)} €</h3>
            </div>
            </div>
        </div>
        </div>
        `;
        
        return dishesMenu;
  }

}

// undefined escalation