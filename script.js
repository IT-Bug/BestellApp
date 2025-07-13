
let basket = [];

function init() {
  renderDishBoxContent();
}


function renderDishBoxContent() {
  let dishContainer = document.getElementById("dishBoxContent");
  dishContainer.innerHTML = "";

  for (let i = 0; i < dishes.length; i++) {
    let dish = dishes[i];

    dishContainer.innerHTML += `
        <div>
            ${getDishBoxTemplate(dish)}
        </div>
                
    `;
  }
}


function renderBasket() {
  let container = document.getElementById("hideInfoaddDishes");
  if (!container) return;

  container.innerHTML = "";

  let total = 0;

  for (let item of basket) {
    let dish = dishes.find(d => d.id === item.dishId);
    if (dish) {
      total += dish.price * item.amount;
      container.innerHTML += addDishesBasketTemplate(dish, item.amount);
    }
  }

  
  if (basket.length === 0) {
    container.innerHTML = deletedBasketHTML();
    return;
  }

  container.innerHTML += `
    <div class="finish-conatiner">
      <div>
        <div class="x-stripe-container">
          <div class="horizontal-strip"></div>
        </div>
        <h3>Gesamtbetrag</h3>
        <span>Summe: ${total.toFixed(2)} €</span>
      </div>

      <div class="basket-finish-btn">
        <button onclick="finshedBasket()" class="finish-btn" data-text="Awesome">
          <span class="actual-text">BESTELLUNG</span>
          <span aria-hidden="true" class="hover-text">AUFGEBEN</span>
        </button>
      </div>
    </div>
  `;
}

function addDishesBasket(dishId) {
  let dishInBasket = basket.find(item => item.dishId === dishId);
  if (dishInBasket) {
    dishInBasket.amount++;
  } else {
    basket.push({ dishId: dishId, amount: 1 });
  }
  renderBasket();
}


function addDishesBasketMobile(dishId) {
  let hideInfoBasketMobile = document.getElementById("mobileBasket");
  
  if (hideInfoBasketMobile) {
    let dish = dishes.find(d => d.id === dishId)
    if (dish) {
      hideInfoBasketMobile.innerHTML = `
        <div>
          ${addDishesBasketMobileTemplate(dish)}
        </div>
      `;
    }
  }
}

function deleteDishFromBasket(dishId) {
  basket = basket.filter(item => item.dishId !== dishId);
  renderBasket();
}

function finshedBasket() {
  let hideInfoBasket = document.getElementById('hideInfoaddDishes');
  let emptyAlertRef = document.getElementById('emptyAlert');
  let finishAlertRef = document.getElementById('finishAlert');

  if (basket.length === 0) {
    emptyAlertRef.style.display = 'block';
    setTimeout(() => {
      emptyAlertRef.style.display = 'none';
    }, 5000);
  } else if (basket.length > 0) { 
    finishAlertRef.style.display = 'block';
    setTimeout(() => {
      finishAlertRef.style.display = 'none';
    }, 5000);

    basket = [];

    hideInfoBasket.innerHTML = "";

    hideInfoBasket.innerHTML = `
    <div>
      ${deletedBasketHTML()}
    </div>
    `;
  } 
}

function removeDishesBasket(dishId) {
  let dishInBasket = basket.find(item => item.dishId === dishId);
  if (dishInBasket) {
    if (dishInBasket.amount > 1) {
      dishInBasket.amount--;
    } else {
      // Wenn nur noch 1 Stück, dann komplett entfernen
      basket = basket.filter(item => item.dishId !== dishId);
    }
    renderBasket();
  }
}