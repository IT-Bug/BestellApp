
function openBasketPopUp(){
    let popUpBasketRef = document.getElementById('popUpBasket');
    popUpBasketRef.innerHTML= "";
    popUpBasketRef.classList.toggle("display-none");


    popUpBasketRef.innerHTML= `
        <div class="popUpBasket">
            <div id="basket" class="basket">
              <img src="../assets/logos/basket.png" height="50px" alt="warenkorb logo"/>
              <h2>Vergiss nicht dein Warenkorb zu füllen</h2>
              <p>Suche deine Lieblingsgerichte aus oder probier etwas Neues, pack die Gerichte in dein Warenkorb und bestelle dein Essen.</p>
            </div>
        </div>

    `;

    return popUpBasketRef;
}