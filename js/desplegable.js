
//Codigo para desplegar el texto de cursos al tocar el boton Ver mas.
console.log("Nueva version");

let estado = true;

document.getElementById("boton_mostrar").addEventListener('click', function () {
    console.log("Click desde EventListener");
    if (estado)
    {
    document.getElementById("txt_cursos").innerHTML = "Post graduate Course in Embedded Systems (96 hours). Facultad de Ingenieria University of Buenos Aires (FIUBA).  <br>Automata Programming Under IEC 61131-3 International Standard.  Argentina. <br>Design in VHDL for FPGA. National University of San Luis - San Luis - Argentina <br>Functional Verification for Programmable Logic Designs at INVAP Aerospace <br>Lab VIEW 7 at Istituto Nazionale di Fisica Nucleare (INFN) - Milan - Italy <br>Photomultiplier Tubes (PMT) School & SD/FD Calibration Workshop - Malargüe - Argentina <br>Digi University Workshop XBee, ZigBee, iButton at National Technological University";
    console.log("entro al if de mostrar mas, y estado = " + estado);
    }

    else
    {
        document.getElementById("txt_cursos").innerHTML = ""; 
        console.log("entro al else de mostrar menos, y estado = " + estado);
    }

    estado = !estado;

}
);

document.getElementById("boton_ocultar").addEventListener('click', function () {
    console.log("Click desde EventListener");
    document.getElementById("txt_cursos").innerHTML = "";
}
);
