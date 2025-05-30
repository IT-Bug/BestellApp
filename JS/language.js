
function togglePopup() {
    let fensterpopup = document.getElementById('popup');
    fensterpopup.classList.toggle("open-popup");
}

document.addEventListener('click', function (event) {
    const popup = document.getElementById('popup');
    const trigger = document.querySelector('.logo');

    if (!popup.contains(event.target) && !trigger.contains(event.target)) {
        popup.classList.remove('open-popup');
    }
});