
function openBasketPopUp(){
    let popUpBasketRef = document.getElementById('popUpBasket');
    popUpBasketRef.classList.toggle("display-none");


    popUpBasketRef.innerHTML= `
        <div class="popUpBasket">
          <h2 data-i18n="basketHeadline" style="padding: 30px 20px; display: flex; justify-content: center">
            Warenkorb
          </h2>
          <div class="change-container">
            <div class="change-logo-txt-container">
              <div class="icon-basket">
                <img class="chg-logos" src="../assets/logos/carblack.png" height="30px" alt="Lieferung icon"/>
              </div>
              <div>
                <p data-i18n="basketStep1Titel">Lieferung</p>
                <p style="font-size: small">15-35 min</p>
              </div>
            </div>

            <div class="change-logo-txt-container">
              <div class="icon-basket">
                <img class="chg-logos" src="../assets/logos/handbasketblack.png" height="30px" alt="abholung logo"/>
              </div>
              <div>
                <p data-i18n="basketStep2Titel">Abholung</p>
                <p style="font-size: small">15 min</p>
              </div>
            </div>
          </div>

            <div id="mobileBasket" class="basket">
              <img src="../assets/logos/basket.png" height="50px" alt="warenkorb logo"/>
              <h2>Vergiss nicht dein Warenkorb zu füllen</h2>
              <p>Suche deine Lieblingsgerichte aus oder probier etwas Neues, pack die Gerichte in dein Warenkorb und bestelle dein Essen.</p>
            </div>
        </div>

    `;

}

function addDishesBasketMobileTemplate(dish) {
  let mobileBasket = `
      <div class="mobile-basket-item">
      <div class="mobile-basket-headline">
        <h3>${dish.name}</h3>
        <h3>${dish.price.toFixed(2)} €</h3>
      </div>
      <div>
        <a class="extra-info">Anmerkung hinzufügen</a>
      </div>
      <div class="mobile-basket-controls">
        <button onclick="deleteDishFromBasket()" aria-label="Delete item" class="delete-button">
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
  `;

  return mobileBasket;
}