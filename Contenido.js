function abrir_L8_A01() {
    $("#box_L8_A01").slideDown();
}

function cerrar_L8_A01() {
    $("#box_L8_A01").slideUp();
}

let colorSeleccionado = ''; // Variable para almacenar el color seleccionado

        function cambiarcolor(color) {
            colorSeleccionado = color; // Guarda el color seleccionado
        }

        function myFunction() {
            const div = document.getElementById('box_ext_L8_A01');
            switch (colorSeleccionado) {
                case 'blue':
                    div.style.backgroundImage = 'linear-gradient(white 90%, blue)';
                    break;
                case 'yellow':
                    div.style.backgroundImage = 'linear-gradient(white 90%, yellow)';
                    break;
                case 'orange':
                    div.style.backgroundImage = 'linear-gradient(white 90%, orange)';
                    break;
                case 'red':
                        div.style.backgroundImage = 'linear-gradient(white 90%, red)';
                        break;
                // Agrega más casos para otros colores
                default:
                    div.style.backgroundImage = 'linear-gradient(white 90%, green)'; // Color inicial si no se selecciona ningún color
            }
            alert("Tu mensaje a sido enviado correctamente");   
        }




