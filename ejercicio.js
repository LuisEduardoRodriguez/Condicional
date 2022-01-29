let datos = document.getElementById("datos");


const nombreUsuario = () => {

    let nombre = prompt("Ingresa nombre de tecnico");
    let cedula = prompt("Ingresa cedula de tecnico");

    if (nombre == "luis" && cedula == 102450){
    alert("¡Nombre y cedula de tecnico confirmado!");
    window.open("../Condicional/tecnico/index.html");
    }

    else {
    alert("¡Tecnico no confirmado! LLamar");
    window.open("./index.html");
    }

};
datos.onclick = function () {
    nombreUsuario();
    };