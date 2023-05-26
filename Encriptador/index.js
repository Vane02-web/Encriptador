
function encriptar (){ 
    let texto = document.getElementById("texto").value;
    let mensajeencriptado = document.getElementById ("mensajeencriptado");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById ("muñeco");

    let textoCifrado= texto
        .replace(/e/gi, "euo")
        .replace(/i/gi, "ias")
        .replace(/a/gi, "aja")
        .replace(/o/gi, "opa")
        .replace(/u/gi, "uwu");

    if ( texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        mensajeencriptado.textContent = "Texto Encriptado con éxito";
        parrafo.textContent = "";
        muñeco.src =  "./imagenes/encriptado.jpg";
     } else {
        muñeco.src = "./imagenes/animacion.JPG";
        mensajeencriptado.textContent = "Mensaje no encontrado";
        parrafo.textContent = "Ingresa el texto para encriptar o desencriptar";
        swal("ALTO", "INGRESA EL TEXTO", "warning");
        
     }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let mensajeencriptado = document.getElementById ("mensajeencriptado");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById ("muñeco");

    let textoCifrado = texto
        .replace(/euo/gi, "e")
        .replace(/ias/gi, "i")
        .replace(/aja/gi, "a")
        .replace(/opa/gi, "o")
        .replace(/uwu/gi, "u");

        if ( texto.length != 0) {
            document.getElementById("texto").value = textoCifrado;
            mensajeencriptado.textContent = "Texto Desencriptado con éxito"; 
            parrafo.textContent = "";
            muñeco.src = "./imagenes/mensaje desencriptado.jpg";
    } else {
        muñeco.src = "./imagenes/animacion.JPG";
        mensajeencriptado.textContent = "Mensaje no encontrado";
        parrafo.textContent = "Ingresa el texto para encriptar o desencriptar";
        swal("ALTO", "INGRESA EL TEXTO", "warning");
    }
}

