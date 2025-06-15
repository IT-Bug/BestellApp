function init() {
//   renderDishBoxes();
  renderDishBoxContent();
}

function renderDishBoxContent() {
  let dishContainer = document.getElementById("dishBox");
  dishContainer.innerHTML = "";

  for (let i = 0; i < dishes.length; i++) {
    let dish = dishes[i];

    dishContainer.innerHTML += `
        <div class="dishBox">
            ${getDishBoxTemplate(dish)}
        </div>
                
    `;
  }
}
