/**
 * @file script.js
 * @author CodeFactory
 * @date 2024-09-17
 *
 *
 */

/* constants */
const body = document.querySelector("body");

/* check scroll position */
document.addEventListener("scroll", function () {
    if (window.scrollY > 50) body.classList.add("scrolled");
    else body.classList.remove("scrolled");
});

/****************
 * Section HERO *
 ****************/

const heroSection = document.querySelector("#hero");
const playPause = heroSection.querySelector("#hero-play-button");
const videoHero = heroSection.querySelector("#hero-video");
playPause.addEventListener("click", function () {
    videoHero.paused ? videoHero.play() : videoHero.pause();
    ["bi-play-fill", "bi-pause-fill"].map(cls => playPause.querySelector("i").classList.toggle(cls));
    heroSection.classList.toggle("videoPlaying");
});

/**************************
 * Section Scheda Tecnica *
 **************************/

// Funzione per popolare la tabella con i dati JSON
function populateTable(data) {
    const specsTables = document.querySelector("#specs-tables");
    const fragment = document.createDocumentFragment();
    Object.keys(data).forEach(section => {
        const sectionData = data[section];
        const table = document.createElement("table");
        table.classList.add("table", "table-striped", "table-bordered");

        /* header */
        const sectionRow = document.createElement("tr");
        const sectionHeader = document.createElement("th");
        sectionHeader.setAttribute("colspan", "2");
        sectionHeader.classList.add("table-primary");
        sectionHeader.textContent = section.replace(/_/g, " ").toUpperCase();
        sectionRow.appendChild(sectionHeader);
        table.appendChild(sectionRow);

        /* body */
        Object.keys(sectionData).forEach(key => {
            const row = document.createElement("tr");
            const keyCell = document.createElement("td");
            keyCell.classList.add("table-key");
            keyCell.textContent = key.replace(/_/g, " ").toUpperCase();
            const valueCell = document.createElement("td");
            valueCell.classList.add("table-value");
            valueCell.textContent = sectionData[key];
            row.appendChild(keyCell);
            row.appendChild(valueCell);
            table.appendChild(row);
        });
        fragment.appendChild(table);
    });
    /* Download PDF */
    const donwloadContainer = document.createElement("div");
    donwloadContainer.classList.add("d-flex", "justify-content-center", "align-items-center");
    
    const downloadButton = document.createElement("a");
    downloadButton.href = "./assets/docs/scheda-tecnica.pdf";
    downloadButton.classList.add("btn", "btn-danger", "rounded-pill", "fw-bold", "btn-lg");
    
    const downloadText = document.createElement("span");
    downloadText.textContent = " DOWNLOAD PDF";

    const icon = document.createElement("i");
    icon.classList.add("bi", "bi-file-earmark-pdf-fill");

    downloadButton.appendChild(icon);
    downloadButton.appendChild(downloadText);
    downloadButton.setAttribute("target", "_blank");
    donwloadContainer.appendChild(downloadButton);
    fragment.appendChild(donwloadContainer);
    specsTables.appendChild(fragment);

}

// Funzione per caricare il file JSON
function loadJSON() {
    fetch("./scripts/specifiche.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Errore nel caricamento del file JSON");
            }
            return response.json();
        })
        .then(data => {
            populateTable(data);
        })
        .catch(error => {
            console.error("Errore:", error);
        });
}

loadJSON();

/***************
 * Section FAQ *
 ***************/

const showMoreFAQ = document.querySelector("#showMoreFAQ");
const accordionItems = document.querySelectorAll(".accordion-item");

showMoreFAQ.addEventListener("click", () => {
    accordionItems.forEach((item, index) => {
        if (index >= 3)
            item.classList.toggle("d-none");
    });
    showMoreFAQ.textContent = showMoreFAQ.textContent === "Mostra altre domande" ? "Mostra meno domande" : "Mostra altre domande";
});

/**********************
 * Section Contattaci *
 **********************/

let textArea = document.querySelector("textarea#textAreaRichiesta");
let text = document.querySelector("p.counterChar");
let maxChars = textArea.maxLength;

function colorText(currentChars) {
    if (currentChars === maxChars) {
        text.style.color = "red";
    } else if (currentChars >= maxChars - 30) {
        text.style.color = "orange";
    } else {
        text.style.color = "black";
    }
}

textArea.addEventListener("input", () => {
    let currentChars = textArea.value.length;
    text.textContent = `${currentChars}/${maxChars}`;
    colorText(currentChars);
});

// Prenotazione
let buttonPrenotazione = document.querySelector("div#buttonPrenotazione");
let buttonAnnullaPrenotazione = document.querySelector("div#buttonAnnullaPrenotazione");
let campiPrenotazione = document.querySelector("div#sezionePrenotazione");

buttonPrenotazione.addEventListener("click", () => {
    buttonPrenotazione.style.display = "none";
    campiPrenotazione.classList.remove("dontShow");
    document.querySelector("input#inputDataVisita").setAttribute("required", "");
    document.querySelector("input#inputOrarioVisita").setAttribute("required", "");
});

buttonAnnullaPrenotazione.addEventListener("click", () => {
    buttonPrenotazione.style.display = "inline-block";
    campiPrenotazione.classList.add("dontShow");
    document.querySelector("input#inputDataVisita").removeAttribute("required");
    document.querySelector("input#inputOrarioVisita").removeAttribute("required");
});

// BOOTSTRAP VALIDATION
// XXXVB: rivedere funzione di validazione bootstrap
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    "use strict";

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll(".needs-validation");

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener(
            "submit",
            event => {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }

                form.classList.add("was-validated");
            },
            false
        );
    });
})();

// XXXVB: aggiungere script per captcha
// ! CAPTCHA SCRIPT callback function manage token ---------------------------------------------------------------
// function onSubmit(token) {
//     document.getElementById("demo-form").submit();
// }
