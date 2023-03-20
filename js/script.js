function saludar(){
    alert("Hola estas probando mi saludo por botón");
}

const botonSaludar = document.getElementById("saludar")
botonSaludar.addEventListener("click", saludar);