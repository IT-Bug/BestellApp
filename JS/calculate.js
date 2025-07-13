function addAmount() {
    let trashElement = document.getElementById('hideTrash');
    let amountElement = document.getElementById('amount');
    let priceElement = document.getElementById('basketPrice');
    let numberAmount = parseInt(amountElement.innerText);

    amountElement.innerText = numberAmount + 1;


    let basePrice = parseFloat(priceElement.getAttribute('data-base-price'));
    priceElement.innerText = (basePrice * (numberAmount + 1)).toFixed(2) + ' €';

}

function removeAmount() {
    let trashElement = document.getElementById('hideTrash');
    let amountElement = document.getElementById('amount');
    let priceElement = document.getElementById('basketPrice');
    let numberAmount = parseInt(amountElement.innerText);

    if (numberAmount > 1) {
        amountElement.innerText = numberAmount - 1;
        let basePrice = parseFloat(priceElement.getAttribute('data-base-price'));
        priceElement.innerText = (basePrice * (numberAmount - 1)).toFixed(2) + ' €';

        if (numberAmount - 1 === 1) {
            trashElement.innerHTML = `
                <button onclick="deleteDishFromBasket()" aria-label="Delete item" class="delete-button">
                    <!-- SVG Trash Icon hier -->
                    <svg class="trash-svg" viewBox="0 -10 64 74" xmlns="http://www.w3.org/2000/svg">
                        <g id="trash-can">
                            <rect x="16" y="24" width="32" height="30" rx="3" ry="3" fill="#e74c3c"></rect>
                            <g transform-origin="12 18" id="lid-group">
                                <rect x="12" y="12" width="40" height="6" rx="2" ry="2" fill="#c0392b"></rect>
                                <rect x="26" y="8" width="12" height="4" rx="2" ry="2" fill="#c0392b"></rect>
                            </g>
                        </g>
                    </svg>
                </button>
            `;
        }
    }
}

// add amount Zeile 14-17, minus fehlt