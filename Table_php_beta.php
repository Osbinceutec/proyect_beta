<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="icon" href="https://media-exp1.licdn.com/dms/image/C4D0BAQGnGJgCv5zDwQ/company-logo_200_200/0/1589820366187?e=2159024400&v=beta&t=V4G9_knjQmSTcydeyoVaiRmrezAAy5CBLIry-Uod2do">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <link rel="stylesheet" href="Table.css">
    <title>Laboratio 8</title>
</head>
<body>
    
    <div class="clase">
        <h1>Laboratorio de computo 08</h1>
        <div class="docente">
            <div id="box_docente"><i class="bi bi-pc-display-horizontal"></i>
                <br>
                L8-Docente</div>
        </div>
        <div class="control">
            <h2>Indicador de estado</h2>
            <div class="division">
                <h3><div class="colores_estado" id="verde"> </div> Buen estado</h3>
                <h3><div class="colores_estado" id="azul"> </div> Faltan programas</h3>
                <h3><div class="colores_estado" id="amarillo"> </div> Necesita soporte</h3>
                <h3><div class="colores_estado" id="naranja"> </div> Falta un componente</h3>
                <h3><div class="colores_estado" id="rojo"> </div> En mal estado</h3>
                <h3><div class="colores_estado" id="blanco"> </div> Espacio libre</h3>
            </div>
        </div>
        <div class="column" id="column_1" >
            <div class="div-box_colum">A</div>
            <div class="div-box_colum">B</div>
            <div class="div-box_colum">C</div>
            <br>
            <a href="#" onclick="abrir_L8_A01()"><div class="div-box" id="box_ext_L8_A01"><i class="bi bi-pc-display-horizontal"></i>
                <br>
                L8-A01</div></a>
            <div class="Contenido" id="box_L8_A01">
                <nav class="nav_form">
                    <a href="#" onclick="cerrar_L8_A01()"><i class="bi bi-x-square"
                        style="
                            color: white;
                            font-size: x-large;
                            position: fixed;
                            left: 72%;"></i></a>
                    <a href="#" onclick="edit_L8_A01()"><i class="bi bi-pencil-square" 
                        style="
                            color: white;
                            font-size: x-large;
                            left: 83%;"></i></a>
                </nav>
                <br>
                <h2><i class="bi bi-pc-display-horizontal"></i>
                    <br>
                    L8-A01</h2>
                <p><B>Instrucciones:</B> A continuación se enumeran los problemas mas comunes en el equipo. Seleccione la opción que mejor describa la dificultad que esta experimentando actualmente.
                    <li><B>Falta un componente.</B> Presionar si su computadora no cuenta con teclado, mouse, monitor, CPU.</li>
                    <li><B>Falta un programa.</B> Presionar si su computadora no cuenta con algun programa o necesita actualizacion.</li>
                    <li><b>En mal estado.</b> Precionar si su computadora no enciende o si el monitor esta dañado.</li>
                    <li><b>Necesita soporte.</b> Precionar si su computadora se quedo pegada, no reacciona o esta muy lenta.</li>
                    <p><b>Nota:</b> Por ultimo si alguna de las anteriores no describe su problema dar click en la opcion otros y escribir la detallar su problema.</p>
                    <br>
                    <br>
                    <b>Seleccionar problema:</b></p>
                    <br>
                    <button id="" class="button_ventana">Faltan programas</button>
                    <button class="button_ventana">Necesita soporte</button>
                    <button class="button_ventana">Falta un componente</button>
                    <button class="button_ventana">En mal estado</button>
                    <br>
                    <br>
                    <form action="mensaje.php" method="post">
                        <input class="text" type="text" name="mensaje" placeholder="Describe el problema que tuviste con tu computadora">
                        <input class="enviar" type="submit" value="Enviar" >
                    </form>
                    
                    
                    

                  
            </div>
            <div class="div-box"><i class="bi bi-pc-display-horizontal"></i>
                <br>
                L8-B01</div>
            <div class="div-box"><i class="bi bi-pc-display-horizontal"></i>
                <br>
                L8-C01</div>
            <br>
            <div class="div-box"><i class="bi bi-pc-display-horizontal"></i>
                <br>
                L8-A02</div>
            <div class="div-box"><i class="bi bi-pc-display-horizontal"></i>
                <br>
                L8-B02</div>
            <div class="div-box"><i class="bi bi-pc-display-horizontal"></i>
                <br>
                L8-C02</div>
            <br>
            <div class="div-box"><i class="bi bi-pc-display-horizontal"></i>
                <br>
                L8-A03</div>
            <div class="div-box"><i class="bi bi-pc-display-horizontal"></i>
                <br>
                L8-B03</div>
            <div class="div-box"><i class="bi bi-pc-display-horizontal"></i>
                <br>
                L8-C03</div>

        </div>
        <div class="column" id="column_2">
            <div class="div-box_colum">D</div>
            <div class="div-box_colum">E</div>
            <div class="div-box_colum">F</div>
            <div class="div-box_colum">G</div>
            <br>
            <div class="div-box"><i class="bi bi-pc-display-horizontal"></i>
                <br>
                L8-D01</div>
            <div class="div-box"><i class="bi bi-pc-display-horizontal"></i>
                <br>
                L8-E01</div>
            <div class="div-box"><i class="bi bi-pc-display-horizontal"></i>
                <br>
                L8-F01</div>
            <div class="div-box"><i class="bi bi-pc-display-horizontal"></i>
                <br>
                L8-G01</div>
            <br>
            <div class="div-box"><i class="bi bi-pc-display-horizontal"></i>
                <br>
                L8-D02</div>
            <div class="div-box"><i class="bi bi-pc-display-horizontal"></i>
                <br>
                L8-E02</div>
            <div class="div-box"><i class="bi bi-pc-display-horizontal"></i>
                <br>
                L8-F02</div>
            <div class="div-box"><i class="bi bi-pc-display-horizontal"></i>
                <br>
                L8-G02</div>
            <br>
            <div class="div-box"><i class="bi bi-pc-display-horizontal"></i>
                <br>
                L8-D03</div>
            <div class="div-box"><i class="bi bi-pc-display-horizontal"></i>
                <br>
                L8-E03</div>
            <div class="div-box"><i class="bi bi-pc-display-horizontal"></i>
                <br>
                L8-F03</div>
            <div class="div-box"><i class="bi bi-pc-display-horizontal"></i>
                <br>
                L8-G03</div>
        </div>
    </div>
    <Script src="Contenido.js"></Script>
</body>
</html>
