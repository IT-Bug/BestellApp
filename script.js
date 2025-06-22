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


function addDishesBasket() {
  let hideInfoBasket = document.getElementById('hideInfoaddDishes');
  if (hideInfoBasket) {
    hideInfoBasket.classList.add('display-none');
  }
}