
function init(){
    renderContent();
}

function renderContent() {
    let dishBoxRef = document.getElementById('dishBox');
    dishBoxRef.innerHTML += getTemplateMenu();
}