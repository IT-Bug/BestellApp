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

function addDishesBasket(dishId) {
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

function deleteDishFromBasket() {
  let hideInfoBasket = document.getElementById('hideInfoaddDishes');

  if (hideInfoBasket) {
    hideInfoBasket.innerHTML = `
    <div>
      ${deletedBasketHTML()}
    </div>
  `;}
}