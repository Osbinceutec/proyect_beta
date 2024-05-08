<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $mensaje = $_POST["mensaje"];
    $destinatario = "osbin_salgado@unitec.edu"; // Cambia esto al correo deseado

    // Envía el mensaje por correo electrónico
    mail($destinatario, "Mensaje desde el formulario", $mensaje);
    echo "Mensaje enviado correctamente. ¡Gracias!";
}
?>
