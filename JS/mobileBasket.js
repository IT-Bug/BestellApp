
function openBasketPopUp() {
  let popUpBasketRef = document.getElementById('popUpBasket');
  popUpBasketRef.classList.toggle("display-none");

  popUpBasketRef.innerHTML = `
    <div class="popUpBasket">
      <h2 data-i18n="basketHeadline" style="padding: 30px 20px; display: flex; justify-content: center">
        Warenkorb
      </h2>

      <div id="finishAlert" class="finish-alert">
        <span>Vielen Dank für Ihren Einkauf, Ihre Bestellung wird vorbereitet!</span>
      </div>


      <!-- PopUp empty alert -->
    
      <div id="emptyAlert" class="empty-alert">
        <span style="color: aliceblue;">Dein Warenkorb ist Leer, fülle Ihn damit du die Bestellung abschließen kannst.</span>
      </div>



      <div id="finishAlert" class="finish-alert">
        <span>Vielen Dank für Ihren Einkauf, Ihre Bestellung wird vorbereitet!</span>
      </div>

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
              <div id="finishMobileBasket"> </div>
      `;
    }
  }
  renderMobilefinishBasket();
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
