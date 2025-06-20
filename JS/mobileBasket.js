
function openBasketPopUp(){
    let popUpBasketRef = document.getElementById('popUpBasket');
    popUpBasketRef.innerHTML= "";
    popUpBasketRef.classList.toggle("display-none");


    popUpBasketRef.innerHTML= `
        <div class="popUpBasket">
          <div class="change-container">
            <div class="change-logo-txt-container">
              <div class="icon-basket">
                <img
                  class="chg-logos"
                  src="../assets/logos/carblack.png"
                  height="30px"
                  alt="Lieferung icon"
                />
              </div>
              <div>
                <p data-i18n="basketStep1Titel">Lieferung</p>
                <p style="font-size: small">15-35 min</p>
              </div>
            </div>

            <div class="change-logo-txt-container">
              <div class="icon-basket">
                <img
                  class="chg-logos"
                  src="../assets/logos/handbasketblack.png"
                  height="30px"
                  alt="abholung logo"
                />
              </div>
              <div>
                <p data-i18n="basketStep2Titel">Abholung</p>
                <p style="font-size: small">15 min</p>
              </div>
            </div>
          </div>

            <div id="basket" class="basket">
              <img src="../assets/logos/basket.png" height="50px" alt="warenkorb logo"/>
              <h2>Vergiss nicht dein Warenkorb zu füllen</h2>
              <p>Suche deine Lieblingsgerichte aus oder probier etwas Neues, pack die Gerichte in dein Warenkorb und bestelle dein Essen.</p>
            </div>
        </div>

    `;

}
