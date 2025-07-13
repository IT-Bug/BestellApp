// <!-- From Uiverse.io by philipo30 --> Trash Btn
// <!-- From Uiverse.io by JasonMep --> Button

function getDishBoxTemplate(dish) {
  let dishesMenu = "";

  // Dish Image and Headline
  if (dish.backgroundImg) {
    dishesMenu += `
      <div class="dishes-container">
      <div class="dish-box">
          <div id="imageDishBox">
              <img class="image-size-dishbox" src="${
                dish.imgDish
              }" alt="Das Gericht als Bild">
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
              }); addDishesBasketMobile(${
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
              <button onclick="addDishesBasket(${
                dish.id
              }); addDishesBasketMobile(${
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
  }
  return dishesMenu;
}

function addDishesBasketTemplate(dish, amount) {
  return `
    <div class="sidenav-info">
      <div class="dish-box-basket">
        <div class="headline-dish-basket">
          <h3 style="font-size: 15px; text-decoration: underline;">${dish.name}</h3>
          <h3 class="basketPrice" style="font-size: 15px;">${(dish.price * amount).toFixed(2)} €</h3>
        </div>
        <div class="discription-container">
          <div class="dish-price-add-container">
            <div id="hideTrash">
              ${
                amount === 1
                  ? `<button onclick="deleteDishFromBasket(${dish.id})" aria-label="Delete item" class="delete-button">
                      <svg class="trash-svg" viewBox="0 -10 64 74" xmlns="http://www.w3.org/2000/svg">
                        <g id="trash-can">
                          <rect x="16" y="24" width="32" height="30" rx="3" ry="3" fill="#e74c3c"></rect>
                          <g transform-origin="12 18" id="lid-group">
                            <rect x="12" y="12" width="40" height="6" rx="2" ry="2" fill="#c0392b"></rect>
                            <rect x="26" y="8" width="12" height="4" rx="2" ry="2" fill="#c0392b"></rect>
                          </g>
                        </g>
                      </svg>
                    </button>`
                  : `<p onclick="removeDishesBasket(${dish.id})" class="less-btn-basket">─</p>`
              }
            </div>
            <span id="amount">${amount}</span>
            <p onclick="addDishesBasket(${dish.id})" class="add-btn-basket">✛</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

function deletedBasketHTML() {
  let resetBasket = "";

  resetBasket = `
<!-- PopUp empty alert -->

  <div id="emptyAlert" class="empty-alert">
    <span style="color: aliceblue;">Dein Warenkorb ist Leer, fülle Ihn damit du die Bestellung abschließen kannst.</span>
  </div>

<!-- PopUp finished alert -->

  <div id="finishAlert" class="finish-alert">
    <span>Vielen Dank für Ihren Einkauf, Ihre Bestellung wird vorbereitet!</span>
  </div>

    <div id="hideInfoaddDishes">
      <div id="basket" class="basket">
        <img src="../assets/logos/basket.png" height="50px" alt="warenkorb logo"/>
        <h2>Vergiss nicht dein Warenkorb zu füllen</h2>
        <p>
          Suche deine Lieblingsgerichte aus oder probier etwas Neues, pack
          die Gerichte in dein Warenkorb und bestelle dein Essen.
        </p>
    </div>

<!-- Generated a Hamster -->

<div class="hamster-finishbtn-container">
    <div class="hamster-container">
      <div  aria-label="Orange and tan hamster running in a metal wheel"  role="img"  class="wheel-and-hamster">

  <!-- From Uiverse.io by Nawsome -->

        <div class="wheel"></div>
        <div class="hamster">
          <div class="hamster__body">
            <div class="hamster__head">
              <div class="hamster__ear"></div>
              <div class="hamster__eye"></div>
              <div class="hamster__nose"></div>
            </div>
            <div class="hamster__limb hamster__limb--fr"></div>
            <div class="hamster__limb hamster__limb--fl"></div>
            <div class="hamster__limb hamster__limb--br"></div>
            <div class="hamster__limb hamster__limb--bl"></div>
            <div class="hamster__tail"></div>
          </div>
        </div>
        <div class="spoke"></div>
      </div>
    </div>

    <div class="basket-finish-btn">
      <button onclick="finshedBasket()" class="finish-btn" data-text="Awesome">
        <span class="actual-text">BESTELLUNG</span>
        <span aria-hidden="true" class="hover-text">AUFGEBEN</span>
      </button>
    </div>
  </div>
  `;

  return resetBasket;
}
