function enviarMensaje() {
    // Número de WhatsApp al que se enviará el mensaje (reemplaza con tu número)
    var numeroWhatsApp = "573026021782";
    // Mensaje que se enviará automáticamente al hacer clic en el enlace
    var mensaje = "Hola";

    // URL para enviar el mensaje a través de la API de WhatsApp
    var urlWhatsApp = "https://wa.me/" + numeroWhatsApp + "?text=" + encodeURIComponent(mensaje);

    // Redirige a la URL de WhatsApp para enviar el mensaje automáticamente
    window.location.href = urlWhatsApp;
}

// Asignar la función enviarMensaje al hacer clic en el enlace "Habla con Omni"
document.getElementById("hablaConOmni").addEventListener("click", enviarMensaje);
