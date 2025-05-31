
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

// Country translate

let translations = {
    en: {
        basketHeadline: "Shopping cart",
        langHeadline: "Country",
        UK: "United Kingdom",
        DE: "Germany",
        headline: "The best food near you!",
        menuBtn: "To the menus",
        spanTxt: "How to order",
        ctgyHeadline: "IT'S REALLY NOT HARD",
        step1Title: 'Click on "To the menus"',
        step1Text: "We’ll show you all available menus. Maybe something’s in there for you.",
        step2Title: "Decide what you're craving",
        step2Text: "What are you waiting for... Hurry... before the hunger hits.",
        step3Title: "Order delivery or pickup",
        step3Text: "We deliver to your door, or you’re welcome to come pick it up.",
        footerImp: "Imprint",
        footerDatstz: "Privacy Policy",
        footerContact: "Contact"
    },

    de: {
        basketHeadline: "Warenkorb",
        langHeadline: "Land",
        UK: "Vereinigtes Königreich",
        DE: "Deutschland",
        headline: "Das Beste Essen in Deiner Nähe!",
        menuBtn: "Ab zu den Menüs",
        spanTxt: "So bestellst Du",
        ctgyHeadline: "SO SCHWER IST ES NICHT.",
        step1Title: 'Klicke auf "Ab zu den Menüs"',
        step1Text: "Wir zeigen Dir alle Menüs die wir da haben. Vielleicht ist für Dich auch was dabei.",
        step2Title: "Entscheide, worauf Du bock hast",
        step2Text: "Worauf wartest Du... Schnell... bevor der Hunger eilt.",
        step3Title: "Bestelle Lieferung oder Abholung",
        step3Text: "Wir liefern bis zur Tür, kannst aber auch gerne zur Abholung vorbei kommen.",
        footerImp: "Impressum",
        footerDatstz: "Datenschutz",
        footerContact: "Kontakt"
    },
}

function translatePage(lang) { // (parameter) "de" or "en"
    let elements = document.querySelectorAll('[data-i18n]'); // searched all Attributes with data-i18n="..." and saved

    elements.forEach(el => { // forEach is a Loop & el executes a function for each individual element.
        let key = el.getAttribute('data-i18n');

        if (translations[lang] && translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });

    localStorage.setItem('language', lang);
    document.getElementById('popup').classList.remove('open-popup');

    saveLocalStorage();
}