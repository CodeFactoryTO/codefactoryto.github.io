/**
 * @file script.js
 * @author CodeFactory
 * @date 2024-09-17
 *
 * 
 */

/* constants */
const body = document.querySelector('body');

/* check scroll position */
document.addEventListener('scroll', function () {
    if (window.scrollY > 50)
        body.classList.add('scrolled');
    else
        body.classList.remove('scrolled');
});






// ! SCRIPTS PER IL FORM DI CONTATTO + PRENOTAZIONE -------------------------------------------------------------------
// prendiamo gli elementi del document (la text area + counter di lettere inserite)
let textArea = document.querySelector("textarea#textAreaRichiesta");
let text = document.querySelector("p.counterChar");

// massimo numero di caratteri accettati nella richiesta (global), presi dall'attributo `maxlength`
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

    // applicazione del numero di caratteri inseriti / maxcaratteri al <p> sotto il textarea
    text.textContent = `${currentChars}/${maxChars}`;

    // cambia il colore del testo quando il numero di caratteri raggiunge o supera maxChars
    colorText(currentChars);
});


// -----------------------------------------------------------------------------------------------------


// prendiamo il buttone che permette di effettuare la prenotazione di una visita
let buttonPrenotazione = document.querySelector("div#buttonPrenotazione");
let campiPrenotazione = document.querySelector("div#sezionePrenotazione");


buttonPrenotazione.addEventListener("click", () => {

    // rimozione del "bottone" dal documento
    buttonPrenotazione.style.display = "none";

    // rimozione dell'id al div#sezionePrenotazione per mostrare i campi aggiuntivi
    campiPrenotazione.classList.remove("dontShow");
    campiPrenotazione.scrollIntoView({
        behavior: 'smooth'
    });

    // aggiunta dell'attributo required ai 2 campi aggiuntivi (data e ora)
    document.querySelector("input#inputDataVisita").setAttribute("required","");
    document.querySelector("input#inputOrarioVisita").setAttribute("required","");
});







// ! VALIATION BOOTSTRAP-----------------------------------------------------------------------------------------------

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()








// ! CAPTCHA SCRIPT callback function manage token ---------------------------------------------------------------
// function onSubmit(token) {
//     document.getElementById("demo-form").submit();
// }