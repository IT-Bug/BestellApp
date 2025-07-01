
let basket = [];

function init() {
  renderDishBoxContent();
}


//  mid Menu content
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

// add Dishes in Basket

function addDishesBasket(dishId) {
  let dishInBasket = basket.find(item => item.dishId === dishId);
  if (dishInBasket) {
    dishInBasket.amount++;
  } else {
    basket.push({ dishId: dishId, amount: 1 });
  }

  let hideInfoBasket = document.getElementById("hideInfoaddDishes");
  if (hideInfoBasket) {
    let dish = dishes.find(d => d.id === dishId)
    if (dish) {
      hideInfoBasket.innerHTML = `
          ${addDishesBasketTemplate(dish)}
      `;
    }
  }
}

// add Dishes in Basket Mobile

function addDishesBasketMobile(dishId) {
  openBasketPopUp();
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

// delete Dishes from Basket

function deleteDishFromBasket(dishId) {
  let hideInfoBasket = document.getElementById('hideInfoaddDishes');
  basket = basket.filter(item => item.dishId !== dishId);
  
  if (hideInfoBasket) {
    hideInfoBasket.innerHTML = "";
    hideInfoBasket.innerHTML = `
    <div>
    ${deletedBasketHTML()}
    </div>
    `;
  }

      basket = [];
}

// finished order

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