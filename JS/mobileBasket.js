
function openBasketPopUp() {
  let popUpBasketRef = document.getElementById('popUpBasket');
  popUpBasketRef.classList.toggle("display-none");

  popUpBasketRef.innerHTML = `
    <div class="popUpBasket">
      <h2 data-i18n="basketHeadline" style="padding: 30px 20px; display: flex; justify-content: center">
        Warenkorb
      </h2>

      <div class="delivery-pickup-container">
        <div class="checkbox-logo-container" onclick="deliveryOption()">
          <img src="../assets/logos/carblack.png" id="checkboxDelivery" >
          <span class="custom-checkbox"></span>
          <span style="margin-left: 8px;">Liefern</span>
        </div>
        <div class="checkbox-logo-container" onclick="pickupOption()">
          <img src="../assets/logos/handbasketblack.png" id="checkboxPickup" class="ui-checkbox">
          <span style="margin-left: 8px;">Abholung</span>
        </div>
      </div>

      <div id="mobileBasket" class="basket"></div>
    </div>
  `;

  renderMobileBasket();
}


function renderMobileBasket() {
  let container = document.getElementById("mobileBasket");
  if (!container) return;

  container.innerHTML = "";

  if (basket.length === 0) {
    container.innerHTML = `
      <img src="../assets/logos/basket.png" height="50px" alt="warenkorb logo"/>
      <h2>Vergiss nicht dein Warenkorb zu füllen</h2>
      <p>Suche deine Lieblingsgerichte aus oder probier etwas Neues, pack die Gerichte in dein Warenkorb und bestelle dein Essen.</p>
    `;
    return;
  }

  for (let item of basket) {
    let dish = dishes.find(d => d.id === item.dishId);
    if (dish) {
      container.innerHTML += `
        <div class="sidenav-info">
          <div class="dish-box-basket">
            <div class="headline-dish-basket">
              <h3 style="font-size: 15px; text-decoration: underline;">${dish.name}</h3>
              <h3 class="basketPrice" style="font-size: 15px;">${(dish.price * item.amount).toFixed(2)} €</h3>
            </div>
            <div class="discription-container">
              <div class="dish-price-add-container">
                <div id="hideTrash">${item.amount === 1 ? `<button onclick="deleteDishFromBasket(${dish.id})" aria-label="Delete item" class="delete-button">
                          <svg class="trash-svg" viewBox="0 -10 64 74" xmlns="http://www.w3.org/2000/svg">
                            <g id="trash-can">
                              <rect x="16" y="24" width="32" height="30" rx="3" ry="3" fill="#e74c3c"></rect>
                              <g transform-origin="12 18" id="lid-group">
                                <rect x="12" y="12" width="40" height="6" rx="2" ry="2" fill="#c0392b"></rect>
                                <rect x="26" y="8" width="12" height="4" rx="2" ry="2" fill="#c0392b"></rect>
                              </g>
                            </g>
                          </svg>
                        </button>` : `<p onclick="removeDishesBasket(${dish.id})" class="less-btn-basket">─</p>`}
                </div>
                <span id="amount">${item.amount}</span>
                <p onclick="addDishesBasket(${dish.id})" class="add-btn-basket">✛</p>
              </div>
            </div>
          </div>
        </div>
      `;
    }
  }
}





function addDishesBasketMobile(dishId) {
  let dishInBasket = basket.find(item => item.dishId === dishId);
  if (dishInBasket) {
    dishInBasket.amount++;
  } else {
    basket.push({ dishId: dishId, amount: 1 });
  }

  renderMobileBasket();
}
