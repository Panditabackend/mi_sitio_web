// popup.js con jQuery
import $ from 'jquery';

$(document).ready(function() {
    // Obtén una referencia al formulario y al botón "Enviar"
    var form = $("form");
    var submitButton = $("button[type='submit']");

    // Agrega un evento al formulario para capturar el envío
    form.on("submit", function(event) {
        event.preventDefault(); // Previene el envío del formulario
        // Muestra el popup de confirmación utilizando jQuery
        $("#confirmationModal").modal("show");
    });
});
