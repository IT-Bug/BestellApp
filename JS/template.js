// <!-- From Uiverse.io by philipo30 --> Trash Btn
// <!-- From Uiverse.io by JasonMep --> Button

let basket = [];

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
              <button onclick="addDishesBasket(${
                dish.id
              })" class="gen-button">✛</button>
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
  } else {
    dishesMenu += `
      <div class="dishes-container">
      <div class="dish-box">
          <div class="name-btn-container">
              <h3 class="headline-dish-info-box">${dish.name}</h3>
              <button onclick="addDishesBasket(${dish.id})" class="gen-button">✛</button>
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
  }
  return dishesMenu;
}

function addDishesBasketTemplate(dish) {
  let addDishBasket = "";

  addDishBasket = `
    
    <div class="sidenav-info">
          <div class="dish-box-basket">
            <div class="headline-dish-basket">
              <h3 style="font-size: 15px; text-decoration: underline;">${dish.name}</h3>
              <h3 style="font-size: 15px;">${dish.price.toFixed(2)} €</h3>
            </div>

            <div style="display: flex; justify-content: flex-start;">
                <a class="extra-info">Anmerkung hinzufügen</a>
            </div>
            
            <div class="discription-container">
              <div class="dish-price-add-container">

                <button aria-label="Delete item" class="delete-button">
                    <svg class="trash-svg" viewBox="0 -10 64 74" xmlns="http://www.w3.org/2000/svg">
                        <g id="trash-can">
                            <rect x="16" y="24" width="32" height="30" rx="3" ry="3" fill="#e74c3c"></rect>
                            
                            <g transform-origin="12 18" id="lid-group">
                                <rect x="12" y="12" width="40" height="6" rx="2" ry="2" fill="#c0392b"></rect>
                                <rect x="26" y="8" width="12" height="4" rx="2" ry="2" fill="#c0392b"></rect>
                            </g>
                        </g>
                    </svg>
                </button>
                
                <span id="amount">1</span>
                
                <p class="add-btn-basket">✛</p>
              </div>
            </div>
          </div>
    </div>
    
    `;

  return addDishBasket;
}
