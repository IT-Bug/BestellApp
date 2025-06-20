
function openBasketPopUp(){
    let popUpBasketRef = document.getElementById('popUpBasket');
    popUpBasketRef.innerHTML= "";
    
    popUpBasketRef.innerHTML= `
        <div class="popUpBasket">Hallo</div>

    `;

    return popUpBasketRef;
}