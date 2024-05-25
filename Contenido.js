//L8_A01

function abrir_L8_A01() {
    $("#box_interno_L8_A01").slideDown();
    $("#estado_L8_A01").slideDown();
}

function cerrar_L8_A01() {
    $("#box_interno_L8_A01").slideUp();
}

let colorSeleccionado_L8_A01 = ''; // Variable para almacenar el color seleccionado

        function cambiarcolor_L8_A01(color) {
            colorSeleccionado_L8_A01 = color; // Guarda el color seleccionado
        }

        function enviar_problem_L8_A01() {
            const div = document.getElementById('box_externo_L8_A01');
            switch (colorSeleccionado_L8_A01) {
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
            
            $("#box_interno_L8_A01").slideUp();  
            document.getElementById("report_L8_A01").style.display = "none";
            document.getElementById("estado_L8_A01").style.display = "block";
        }

        function report_problem_L8_A01() {
            document.getElementById("report_L8_A01").style.display = "block";
            var estado_L8_A01 = document.getElementById("estado_L8_A01");
            var report_L8_A01 = document.getElementById("report_L8_A01");

                estado_L8_A01.style.display = "none";        
                report_L8_A01.style.display = "block";
                alert("Reporta el problema que tienes con el equipo"); 
    }

//L8_A02

function abrir_L8_A02() {
    $("#box_interno_L8_A02").slideDown();
    $("#estado_L8_A02").slideDown();
}

function cerrar_L8_A02() {
    $("#box_interno_L8_A02").slideUp();
}

let colorSeleccionado_L8_A02 = ''; // Variable para almacenar el color seleccionado

        function cambiarcolor_L8_A02(color) {
            colorSeleccionado_L8_A02 = color; // Guarda el color seleccionado
        }

        function enviar_problem_L8_A02() {
            const div = document.getElementById('box_externo_L8_A02');
            switch (colorSeleccionado_L8_A02) {
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

            $('.button_ventana').click(function() {
                $('.button_ventana').removeClass('seleccionado'); // Remueve la clase de todos los botones
                $(this).addClass('seleccionado'); // Agrega la clase al botón presionado
            });

            alert("Tu mensaje a sido enviado correctamente");  
            
            $("#box_interno_L8_A02").slideUp();
            document.getElementById("report_L8_A02").style.display = "none";
        document.getElementById("estado_L8_A02").style.display = "block";
            
        }

        function report_problem_L8_A02() {
            document.getElementById("report_L8_A02").style.display = "block";
            var estado_L8_A02 = document.getElementById("estado_L8_A02");
            var report_L8_A02 = document.getElementById("report_L8_A02");

                estado_L8_A02.style.display = "none";        
                report_L8_A02.style.display = "block";
                alert("Reporta el problema que tienes con el equipo"); 

    }

//L8_A03

function abrir_L8_A03() {
    $("#box_interno_L8_A03").slideDown();
    $("#estado_L8_A03").slideDown();
}

function cerrar_L8_A03() {
    $("#box_interno_L8_A03").slideUp();
}

let colorSeleccionado_L8_A03 = ''; // Variable para almacenar el color seleccionado

        function cambiarcolor_L8_A03(color) {
            colorSeleccionado_L8_A03 = color; // Guarda el color seleccionado
        }

        function enviar_problem_L8_A03() {
            const div = document.getElementById('box_externo_L8_A03');
            switch (colorSeleccionado_L8_A03) {
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

            $('.button_ventana').click(function() {
                $('.button_ventana').removeClass('seleccionado'); // Remueve la clase de todos los botones
                $(this).addClass('seleccionado'); // Agrega la clase al botón presionado
            });

            alert("Tu mensaje a sido enviado correctamente");  
            
            $("#box_interno_L8_A03").slideUp();
            document.getElementById("report_L8_A03").style.display = "none";
        document.getElementById("estado_L8_A03").style.display = "block";
            
        }

        function report_problem_L8_A03() {
            document.getElementById("report_L8_A03").style.display = "block";
            var estado_L8_A03 = document.getElementById("estado_L8_A03");
            var report_L8_A03 = document.getElementById("report_L8_A03");

                estado_L8_A03.style.display = "none";        
                report_L8_A03.style.display = "block";
                alert("Reporta el problema que tienes con el equipo"); 

    }


//L8_B01

    function abrir_L8_B01() {
        $("#box_interno_L8_B01").slideDown();
        $("#estado_L8_B01").slideDown();
    }
    
    function cerrar_L8_B01() {
        $("#box_interno_L8_B01").slideUp();
    }
    
    let colorSeleccionado_L8_B01 = ''; // Variable para almacenar el color seleccionado
    
            function cambiarcolor_L8_B01(color) {
                colorSeleccionado_L8_B01 = color; // Guarda el color seleccionado
            }
    
            function enviar_problem_L8_B01() {
                const div = document.getElementById('box_externo_L8_B01');
                switch (colorSeleccionado_L8_B01) {
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

                $('.button_ventana').click(function() {
                    $('.button_ventana').removeClass('seleccionado'); // Remueve la clase de todos los botones
                    $(this).addClass('seleccionado'); // Agrega la clase al botón presionado
                });

                alert("Tu mensaje a sido enviado correctamente");  
                
                $("#box_interno_L8_B01").slideUp();
                document.getElementById("report_L8_B01").style.display = "none";
            document.getElementById("estado_L8_B01").style.display = "block";
                
            }
    
            function report_problem_L8_B01() {
                document.getElementById("report_L8_B01").style.display = "block";
                var estado_L8_B01 = document.getElementById("estado_L8_B01");
                var report_L8_B01 = document.getElementById("report_L8_B01");
    
                    estado_L8_B01.style.display = "none";        
                    report_L8_B01.style.display = "block";
                    alert("Reporta el problema que tienes con el equipo"); 

        }

//L8_B02

function abrir_L8_B02() {
    $("#box_interno_L8_B02").slideDown();
    $("#estado_L8_B02").slideDown();
}

function cerrar_L8_B02() {
    $("#box_interno_L8_B02").slideUp();
}

let colorSeleccionado_L8_B02 = ''; // Variable para almacenar el color seleccionado

        function cambiarcolor_L8_B02(color) {
            colorSeleccionado_L8_B02 = color; // Guarda el color seleccionado
        }

        function enviar_problem_L8_B02() {
            const div = document.getElementById('box_externo_L8_B02');
            switch (colorSeleccionado_L8_B02) {
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

            $('.button_ventana').click(function() {
                $('.button_ventana').removeClass('seleccionado'); // Remueve la clase de todos los botones
                $(this).addClass('seleccionado'); // Agrega la clase al botón presionado
            });

            alert("Tu mensaje a sido enviado correctamente");  
            
            $("#box_interno_L8_B02").slideUp();
            document.getElementById("report_L8_B02").style.display = "none";
        document.getElementById("estado_L8_B02").style.display = "block";
            
        }

        function report_problem_L8_B02() {
            document.getElementById("report_L8_B02").style.display = "block";
            var estado_L8_B02 = document.getElementById("estado_L8_B02");
            var report_L8_B02 = document.getElementById("report_L8_B02");

                estado_L8_B02.style.display = "none";        
                report_L8_B02.style.display = "block";
                alert("Reporta el problema que tienes con el equipo"); 

    }

//L8_B03

function abrir_L8_B03() {
    $("#box_interno_L8_B03").slideDown();
    $("#estado_L8_B03").slideDown();
}

function cerrar_L8_B03() {
    $("#box_interno_L8_B03").slideUp();
}

let colorSeleccionado_L8_B03 = ''; // Variable para almacenar el color seleccionado

        function cambiarcolor_L8_B03(color) {
            colorSeleccionado_L8_B03 = color; // Guarda el color seleccionado
        }

        function enviar_problem_L8_B03() {
            const div = document.getElementById('box_externo_L8_B03');
            switch (colorSeleccionado_L8_B03) {
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

            $('.button_ventana').click(function() {
                $('.button_ventana').removeClass('seleccionado'); // Remueve la clase de todos los botones
                $(this).addClass('seleccionado'); // Agrega la clase al botón presionado
            });

            alert("Tu mensaje a sido enviado correctamente");  
            
            $("#box_interno_L8_B03").slideUp();
            document.getElementById("report_L8_B03").style.display = "none";
        document.getElementById("estado_L8_B03").style.display = "block";
            
        }

        function report_problem_L8_B03() {
            document.getElementById("report_L8_B03").style.display = "block";
            var estado_L8_B03 = document.getElementById("estado_L8_B03");
            var report_L8_B03 = document.getElementById("report_L8_B03");

                estado_L8_B03.style.display = "none";        
                report_L8_B03.style.display = "block";
                alert("Reporta el problema que tienes con el equipo"); 

    }


//L8_C01

function abrir_L8_C01() {
    $("#box_interno_L8_C01").slideDown();
    $("#estado_L8_C01").slideDown();
}

function cerrar_L8_C01() {
    $("#box_interno_L8_C01").slideUp();
}

let colorSeleccionado_L8_C01 = ''; // Variable para almacenar el color seleccionado

        function cambiarcolor_L8_C01(color) {
            colorSeleccionado_L8_C01 = color; // Guarda el color seleccionado
        }

        function enviar_problem_L8_C01() {
            const div = document.getElementById('box_externo_L8_C01');
            switch (colorSeleccionado_L8_C01) {
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

            $('.button_ventana').click(function() {
                $('.button_ventana').removeClass('seleccionado'); // Remueve la clase de todos los botones
                $(this).addClass('seleccionado'); // Agrega la clase al botón presionado
            });

            alert("Tu mensaje a sido enviado correctamente");  
            
            $("#box_interno_L8_C01").slideUp();
            document.getElementById("report_L8_C01").style.display = "none";
        document.getElementById("estado_L8_C01").style.display = "block";
            
        }

        function report_problem_L8_C01() {
            document.getElementById("report_L8_C01").style.display = "block";
            var estado_L8_C01 = document.getElementById("estado_L8_C01");
            var report_L8_C01 = document.getElementById("report_L8_C01");

                estado_L8_C01.style.display = "none";        
                report_L8_C01.style.display = "block";
                alert("Reporta el problema que tienes con el equipo"); 

    }

//L8_C02

function abrir_L8_C02() {
    $("#box_interno_L8_C02").slideDown();
    $("#estado_L8_C02").slideDown();
}

function cerrar_L8_C02() {
    $("#box_interno_L8_C02").slideUp();
}

let colorSeleccionado_L8_C02 = ''; // Variable para almacenar el color seleccionado

        function cambiarcolor_L8_C02(color) {
            colorSeleccionado_L8_C02 = color; // Guarda el color seleccionado
        }

        function enviar_problem_L8_C02() {
            const div = document.getElementById('box_externo_L8_C02');
            switch (colorSeleccionado_L8_C02) {
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

            $('.button_ventana').click(function() {
                $('.button_ventana').removeClass('seleccionado'); // Remueve la clase de todos los botones
                $(this).addClass('seleccionado'); // Agrega la clase al botón presionado
            });

            alert("Tu mensaje a sido enviado correctamente");  
            
            $("#box_interno_L8_C02").slideUp();
            document.getElementById("report_L8_C02").style.display = "none";
        document.getElementById("estado_L8_C02").style.display = "block";
            
        }

        function report_problem_L8_C02() {
            document.getElementById("report_L8_C02").style.display = "block";
            var estado_L8_C02 = document.getElementById("estado_L8_C02");
            var report_L8_C02 = document.getElementById("report_L8_C02");

                estado_L8_C02.style.display = "none";        
                report_L8_C02.style.display = "block";
                alert("Reporta el problema que tienes con el equipo"); 

    }

//L8_C03

function abrir_L8_C03() {
    $("#box_interno_L8_C03").slideDown();
    $("#estado_L8_C03").slideDown();
}

function cerrar_L8_C03() {
    $("#box_interno_L8_C03").slideUp();
}

let colorSeleccionado_L8_C03 = ''; // Variable para almacenar el color seleccionado

        function cambiarcolor_L8_C03(color) {
            colorSeleccionado_L8_C03 = color; // Guarda el color seleccionado
        }

        function enviar_problem_L8_C03() {
            const div = document.getElementById('box_externo_L8_C03');
            switch (colorSeleccionado_L8_C03) {
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

            $('.button_ventana').click(function() {
                $('.button_ventana').removeClass('seleccionado'); // Remueve la clase de todos los botones
                $(this).addClass('seleccionado'); // Agrega la clase al botón presionado
            });

            alert("Tu mensaje a sido enviado correctamente");  
            
            $("#box_interno_L8_C03").slideUp();
            document.getElementById("report_L8_C03").style.display = "none";
        document.getElementById("estado_L8_C03").style.display = "block";
            
        }

        function report_problem_L8_C03() {
            document.getElementById("report_L8_C03").style.display = "block";
            var estado_L8_C03 = document.getElementById("estado_L8_C03");
            var report_L8_C03 = document.getElementById("report_L8_C03");

                estado_L8_C03.style.display = "none";        
                report_L8_C03.style.display = "block";
                alert("Reporta el problema que tienes con el equipo"); 

    }

//L8_D01

function abrir_L8_D01() {
    $("#box_interno_L8_D01").slideDown();
    $("#estado_L8_D01").slideDown();
}

function cerrar_L8_D01() {
    $("#box_interno_L8_D01").slideUp();
}

let colorSeleccionado_L8_D01 = ''; // Variable para almacenar el color seleccionado

        function cambiarcolor_L8_D01(color) {
            colorSeleccionado_L8_D01 = color; // Guarda el color seleccionado
        }

        function enviar_problem_L8_D01() {
            const div = document.getElementById('box_externo_L8_D01');
            switch (colorSeleccionado_L8_D01) {
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
            
            $("#box_interno_L8_D01").slideUp();  
            document.getElementById("report_L8_D01").style.display = "none";
            document.getElementById("estado_L8_D01").style.display = "block";
        }

        function report_problem_L8_D01() {
            document.getElementById("report_L8_D01").style.display = "block";
            var estado_L8_D01 = document.getElementById("estado_L8_D01");
            var report_L8_D01 = document.getElementById("report_L8_D01");

                estado_L8_D01.style.display = "none";        
                report_L8_D01.style.display = "block";
                alert("Reporta el problema que tienes con el equipo"); 
    }

//L8_D02

function abrir_L8_D02() {
    $("#box_interno_L8_D02").slideDown();
    $("#estado_L8_D02").slideDown();
}

function cerrar_L8_D02() {
    $("#box_interno_L8_D02").slideUp();
}

let colorSeleccionado_L8_D02 = ''; // Variable para almacenar el color seleccionado

        function cambiarcolor_L8_D02(color) {
            colorSeleccionado_L8_D02 = color; // Guarda el color seleccionado
        }

        function enviar_problem_L8_D02() {
            const div = document.getElementById('box_externo_L8_D02');
            switch (colorSeleccionado_L8_D02) {
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

            $('.button_ventana').click(function() {
                $('.button_ventana').removeClass('seleccionado'); // Remueve la clase de todos los botones
                $(this).addClass('seleccionado'); // Agrega la clase al botón presionado
            });

            alert("Tu mensaje a sido enviado correctamente");  
            
            $("#box_interno_L8_D02").slideUp();
            document.getElementById("report_L8_D02").style.display = "none";
        document.getElementById("estado_L8_D02").style.display = "block";
            
        }

        function report_problem_L8_D02() {
            document.getElementById("report_L8_D02").style.display = "block";
            var estado_L8_D02 = document.getElementById("estado_L8_D02");
            var report_L8_D02 = document.getElementById("report_L8_D02");

                estado_L8_D02.style.display = "none";        
                report_L8_D02.style.display = "block";
                alert("Reporta el problema que tienes con el equipo"); 

    }

//L8_D03

function abrir_L8_D03() {
    $("#box_interno_L8_D03").slideDown();
    $("#estado_L8_D03").slideDown();
}

function cerrar_L8_D03() {
    $("#box_interno_L8_D03").slideUp();
}

let colorSeleccionado_L8_D03 = ''; // Variable para almacenar el color seleccionado

        function cambiarcolor_L8_D03(color) {
            colorSeleccionado_L8_D03 = color; // Guarda el color seleccionado
        }

        function enviar_problem_L8_D03() {
            const div = document.getElementById('box_externo_L8_D03');
            switch (colorSeleccionado_L8_D03) {
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

            $('.button_ventana').click(function() {
                $('.button_ventana').removeClass('seleccionado'); // Remueve la clase de todos los botones
                $(this).addClass('seleccionado'); // Agrega la clase al botón presionado
            });

            alert("Tu mensaje a sido enviado correctamente");  
            
            $("#box_interno_L8_D03").slideUp();
            document.getElementById("report_L8_D03").style.display = "none";
        document.getElementById("estado_L8_D03").style.display = "block";
            
        }

        function report_problem_L8_D03() {
            document.getElementById("report_L8_D03").style.display = "block";
            var estado_L8_D03 = document.getElementById("estado_L8_D03");
            var report_L8_D03 = document.getElementById("report_L8_D03");

                estado_L8_D03.style.display = "none";        
                report_L8_D03.style.display = "block";
                alert("Reporta el problema que tienes con el equipo"); 

    }


//L8_E01

    function abrir_L8_E01() {
        $("#box_interno_L8_E01").slideDown();
        $("#estado_L8_E01").slideDown();
    }
    
    function cerrar_L8_E01() {
        $("#box_interno_L8_E01").slideUp();
    }
    
    let colorSeleccionado_L8_E01 = ''; // Variable para almacenar el color seleccionado
    
            function cambiarcolor_L8_E01(color) {
                colorSeleccionado_L8_E01 = color; // Guarda el color seleccionado
            }
    
            function enviar_problem_L8_E01() {
                const div = document.getElementById('box_externo_L8_E01');
                switch (colorSeleccionado_L8_E01) {
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

                $('.button_ventana').click(function() {
                    $('.button_ventana').removeClass('seleccionado'); // Remueve la clase de todos los botones
                    $(this).addClass('seleccionado'); // Agrega la clase al botón presionado
                });

                alert("Tu mensaje a sido enviado correctamente");  
                
                $("#box_interno_L8_E01").slideUp();
                document.getElementById("report_L8_E01").style.display = "none";
            document.getElementById("estado_L8_E01").style.display = "block";
                
            }
    
            function report_problem_L8_E01() {
                document.getElementById("report_L8_E01").style.display = "block";
                var estado_L8_E01 = document.getElementById("estado_L8_E01");
                var report_L8_E01 = document.getElementById("report_L8_E01");
    
                    estado_L8_E01.style.display = "none";        
                    report_L8_E01.style.display = "block";
                    alert("Reporta el problema que tienes con el equipo"); 

        }

//L8_E02

function abrir_L8_E02() {
    $("#box_interno_L8_E02").slideDown();
    $("#estado_L8_E02").slideDown();
}

function cerrar_L8_E02() {
    $("#box_interno_L8_E02").slideUp();
}

let colorSeleccionado_L8_E02 = ''; // Variable para almacenar el color seleccionado

        function cambiarcolor_L8_E02(color) {
            colorSeleccionado_L8_E02 = color; // Guarda el color seleccionado
        }

        function enviar_problem_L8_E02() {
            const div = document.getElementById('box_externo_L8_E02');
            switch (colorSeleccionado_L8_E02) {
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

            $('.button_ventana').click(function() {
                $('.button_ventana').removeClass('seleccionado'); // Remueve la clase de todos los botones
                $(this).addClass('seleccionado'); // Agrega la clase al botón presionado
            });

            alert("Tu mensaje a sido enviado correctamente");  
            
            $("#box_interno_L8_E02").slideUp();
            document.getElementById("report_L8_E02").style.display = "none";
        document.getElementById("estado_L8_E02").style.display = "block";
            
        }

        function report_problem_L8_E02() {
            document.getElementById("report_L8_E02").style.display = "block";
            var estado_L8_E02 = document.getElementById("estado_L8_E02");
            var report_L8_E02 = document.getElementById("report_L8_E02");

                estado_L8_E02.style.display = "none";        
                report_L8_E02.style.display = "block";
                alert("Reporta el problema que tienes con el equipo"); 

    }

//L8_E03

function abrir_L8_E03() {
    $("#box_interno_L8_E03").slideDown();
    $("#estado_L8_E03").slideDown();
}

function cerrar_L8_E03() {
    $("#box_interno_L8_E03").slideUp();
}

let colorSeleccionado_L8_E03 = ''; // Variable para almacenar el color seleccionado

        function cambiarcolor_L8_E03(color) {
            colorSeleccionado_L8_E03 = color; // Guarda el color seleccionado
        }

        function enviar_problem_L8_E03() {
            const div = document.getElementById('box_externo_L8_E03');
            switch (colorSeleccionado_L8_E03) {
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

            $('.button_ventana').click(function() {
                $('.button_ventana').removeClass('seleccionado'); // Remueve la clase de todos los botones
                $(this).addClass('seleccionado'); // Agrega la clase al botón presionado
            });

            alert("Tu mensaje a sido enviado correctamente");  
            
            $("#box_interno_L8_E03").slideUp();
            document.getElementById("report_L8_E03").style.display = "none";
        document.getElementById("estado_L8_E03").style.display = "block";
            
        }

        function report_problem_L8_E03() {
            document.getElementById("report_L8_E03").style.display = "block";
            var estado_L8_E03 = document.getElementById("estado_L8_E03");
            var report_L8_E03 = document.getElementById("report_L8_E03");

                estado_L8_E03.style.display = "none";        
                report_L8_E03.style.display = "block";
                alert("Reporta el problema que tienes con el equipo"); 

    }


//L8_F01

function abrir_L8_F01() {
    $("#box_interno_L8_F01").slideDown();
    $("#estado_L8_F01").slideDown();
}

function cerrar_L8_F01() {
    $("#box_interno_L8_F01").slideUp();
}

let colorSeleccionado_L8_F01 = ''; // Variable para almacenar el color seleccionado

        function cambiarcolor_L8_F01(color) {
            colorSeleccionado_L8_F01 = color; // Guarda el color seleccionado
        }

        function enviar_problem_L8_F01() {
            const div = document.getElementById('box_externo_L8_F01');
            switch (colorSeleccionado_L8_F01) {
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

            $('.button_ventana').click(function() {
                $('.button_ventana').removeClass('seleccionado'); // Remueve la clase de todos los botones
                $(this).addClass('seleccionado'); // Agrega la clase al botón presionado
            });

            alert("Tu mensaje a sido enviado correctamente");  
            
            $("#box_interno_L8_F01").slideUp();
            document.getElementById("report_L8_F01").style.display = "none";
        document.getElementById("estado_L8_F01").style.display = "block";
            
        }

        function report_problem_L8_F01() {
            document.getElementById("report_L8_F01").style.display = "block";
            var estado_L8_F01 = document.getElementById("estado_L8_F01");
            var report_L8_F01 = document.getElementById("report_L8_F01");

                estado_L8_F01.style.display = "none";        
                report_L8_F01.style.display = "block";
                alert("Reporta el problema que tienes con el equipo"); 

    }

//L8_F02

function abrir_L8_F02() {
    $("#box_interno_L8_F02").slideDown();
    $("#estado_L8_F02").slideDown();
}

function cerrar_L8_F02() {
    $("#box_interno_L8_F02").slideUp();
}

let colorSeleccionado_L8_F02 = ''; // Variable para almacenar el color seleccionado

        function cambiarcolor_L8_F02(color) {
            colorSeleccionado_L8_F02 = color; // Guarda el color seleccionado
        }

        function enviar_problem_L8_F02() {
            const div = document.getElementById('box_externo_L8_F02');
            switch (colorSeleccionado_L8_F02) {
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

            $('.button_ventana').click(function() {
                $('.button_ventana').removeClass('seleccionado'); // Remueve la clase de todos los botones
                $(this).addClass('seleccionado'); // Agrega la clase al botón presionado
            });

            alert("Tu mensaje a sido enviado correctamente");  
            
            $("#box_interno_L8_F02").slideUp();
            document.getElementById("report_L8_F02").style.display = "none";
        document.getElementById("estado_L8_F02").style.display = "block";
            
        }

        function report_problem_L8_F02() {
            document.getElementById("report_L8_F02").style.display = "block";
            var estado_L8_F02 = document.getElementById("estado_L8_F02");
            var report_L8_F02 = document.getElementById("report_L8_F02");

                estado_L8_F02.style.display = "none";        
                report_L8_F02.style.display = "block";
                alert("Reporta el problema que tienes con el equipo"); 

    }

//L8_F03

function abrir_L8_F03() {
    $("#box_interno_L8_F03").slideDown();
    $("#estado_L8_F03").slideDown();
}

function cerrar_L8_F03() {
    $("#box_interno_L8_F03").slideUp();
}

let colorSeleccionado_L8_F03 = ''; // Variable para almacenar el color seleccionado

        function cambiarcolor_L8_F03(color) {
            colorSeleccionado_L8_F03 = color; // Guarda el color seleccionado
        }

        function enviar_problem_L8_F03() {
            const div = document.getElementById('box_externo_L8_F03');
            switch (colorSeleccionado_L8_F03) {
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

            $('.button_ventana').click(function() {
                $('.button_ventana').removeClass('seleccionado'); // Remueve la clase de todos los botones
                $(this).addClass('seleccionado'); // Agrega la clase al botón presionado
            });

            alert("Tu mensaje a sido enviado correctamente");  
            
            $("#box_interno_L8_F03").slideUp();
            document.getElementById("report_L8_F03").style.display = "none";
        document.getElementById("estado_L8_F03").style.display = "block";
            
        }

        function report_problem_L8_F03() {
            document.getElementById("report_L8_F03").style.display = "block";
            var estado_L8_F03 = document.getElementById("estado_L8_F03");
            var report_L8_F03 = document.getElementById("report_L8_F03");

                estado_L8_F03.style.display = "none";        
                report_L8_F03.style.display = "block";
                alert("Reporta el problema que tienes con el equipo"); 

    }

//L8_G01

function abrir_L8_G01() {
    $("#box_interno_L8_G01").slideDown();
    $("#estado_L8_G01").slideDown();
}

function cerrar_L8_G01() {
    $("#box_interno_L8_G01").slideUp();
}

let colorSeleccionado_L8_G01 = ''; // Variable para almacenar el color seleccionado

        function cambiarcolor_L8_G01(color) {
            colorSeleccionado_L8_G01 = color; // Guarda el color seleccionado
        }

        function enviar_problem_L8_G01() {
            const div = document.getElementById('box_externo_L8_G01');
            switch (colorSeleccionado_L8_G01) {
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

            $('.button_ventana').click(function() {
                $('.button_ventana').removeClass('seleccionado'); // Remueve la clase de todos los botones
                $(this).addClass('seleccionado'); // Agrega la clase al botón presionado
            });

            alert("Tu mensaje a sido enviado correctamente");  
            
            $("#box_interno_L8_G01").slideUp();
            document.getElementById("report_L8_G01").style.display = "none";
        document.getElementById("estado_L8_G01").style.display = "block";
            
        }

        function report_problem_L8_G01() {
            document.getElementById("report_L8_G01").style.display = "block";
            var estado_L8_G01 = document.getElementById("estado_L8_G01");
            var report_L8_G01 = document.getElementById("report_L8_G01");

                estado_L8_G01.style.display = "none";        
                report_L8_G01.style.display = "block";
                alert("Reporta el problema que tienes con el equipo"); 

    }

//L8_G02

function abrir_L8_G02() {
    $("#box_interno_L8_G02").slideDown();
    $("#estado_L8_G02").slideDown();
}

function cerrar_L8_G02() {
    $("#box_interno_L8_G02").slideUp();
}

let colorSeleccionado_L8_G02 = ''; // Variable para almacenar el color seleccionado

        function cambiarcolor_L8_G02(color) {
            colorSeleccionado_L8_G02 = color; // Guarda el color seleccionado
        }

        function enviar_problem_L8_G02() {
            const div = document.getElementById('box_externo_L8_G02');
            switch (colorSeleccionado_L8_G02) {
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

            $('.button_ventana').click(function() {
                $('.button_ventana').removeClass('seleccionado'); // Remueve la clase de todos los botones
                $(this).addClass('seleccionado'); // Agrega la clase al botón presionado
            });

            alert("Tu mensaje a sido enviado correctamente");  
            
            $("#box_interno_L8_G02").slideUp();
            document.getElementById("report_L8_G02").style.display = "none";
        document.getElementById("estado_L8_G02").style.display = "block";
            
        }

        function report_problem_L8_G02() {
            document.getElementById("report_L8_G02").style.display = "block";
            var estado_L8_G02 = document.getElementById("estado_L8_G02");
            var report_L8_G02 = document.getElementById("report_L8_G02");

                estado_L8_G02.style.display = "none";        
                report_L8_G02.style.display = "block";
                alert("Reporta el problema que tienes con el equipo"); 

    }

//L8_G03

function abrir_L8_G03() {
    $("#box_interno_L8_G03").slideDown();
    $("#estado_L8_G03").slideDown();
}

function cerrar_L8_G03() {
    $("#box_interno_L8_G03").slideUp();
}

let colorSeleccionado_L8_G03 = ''; // Variable para almacenar el color seleccionado

        function cambiarcolor_L8_G03(color) {
            colorSeleccionado_L8_G03 = color; // Guarda el color seleccionado
        }

        function enviar_problem_L8_G03() {
            const div = document.getElementById('box_externo_L8_G03');
            switch (colorSeleccionado_L8_G03) {
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

            $('.button_ventana').click(function() {
                $('.button_ventana').removeClass('seleccionado'); // Remueve la clase de todos los botones
                $(this).addClass('seleccionado'); // Agrega la clase al botón presionado
            });

            alert("Tu mensaje a sido enviado correctamente");  
            
            $("#box_interno_L8_G03").slideUp();
            document.getElementById("report_L8_G03").style.display = "none";
        document.getElementById("estado_L8_G03").style.display = "block";
            
        }

        function report_problem_L8_G03() {
            document.getElementById("report_L8_G03").style.display = "block";
            var estado_L8_G03 = document.getElementById("estado_L8_G03");
            var report_L8_G03 = document.getElementById("report_L8_G03");

                estado_L8_G03.style.display = "none";        
                report_L8_G03.style.display = "block";
                alert("Reporta el problema que tienes con el equipo"); 

    }


    




