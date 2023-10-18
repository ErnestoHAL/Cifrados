const desplazamiento = document.getElementById("desplazamiento");
const texto = document.getElementById("texto");
const resultado = document.getElementById("resultado");
const cifrarDescifrarButton = document.getElementById("cifrarDescifrar");
const reiniciarButton = document.getElementById("reiniciar");
const modoSelect = document.getElementById("modo");

// Función para cifrar o descifrar el texto
function cifrado() {
    // Obtener el texto ingresado, el valor de desplazamiento y el modo
    const textoIngresado = texto.value;
    const valorDesplazamiento = parseInt(desplazamiento.value);
    const modo = modoSelect.value;

// Función para cifrar un carácter
const cifrarCaracter = (caracter) => {
    const isUpperCase = (caracter === caracter.toUpperCase());
    const valorEntero = caracter.toLowerCase().charCodeAt(0);

    if ((valorEntero >= 97 && valorEntero <= 122) || (valorEntero >= 48 && valorEntero <= 57)) {
        let nuevoValor;
        if (modo === "cifrar") {
            if (valorEntero >= 97 && valorEntero <= 122) {
                nuevoValor = (valorEntero - 97 + valorDesplazamiento) % 26;
                if (nuevoValor < 0) nuevoValor += 26;
                nuevoValor += 97;
            } else if (valorEntero >= 48 && valorEntero <= 57) {
                nuevoValor = (valorEntero - 48 + valorDesplazamiento) % 10;
                if (nuevoValor < 0) nuevoValor += 10;
                nuevoValor += 48;
            }
        } else if (modo === "descifrar") {
            if (valorEntero >= 97 && valorEntero <= 122) {
                nuevoValor = (valorEntero - 97 - valorDesplazamiento) % 26;
                if (nuevoValor < 0) nuevoValor += 26;
                nuevoValor += 97;
            } else if (valorEntero >= 48 && valorEntero <= 57) {
                nuevoValor = (valorEntero - 48 - valorDesplazamiento) % 10;
                if (nuevoValor < 0) nuevoValor += 10;
                nuevoValor += 48;
            }
        }

        return isUpperCase ? String.fromCharCode(nuevoValor).toUpperCase() : String.fromCharCode(nuevoValor);
    }

    return caracter;
};

    // Aplicar el cifrado a cada carácter del texto ingresado
    const textoCifradoResultado = textoIngresado.split('').map(cifrarCaracter).join('');
    resultado.value = textoCifradoResultado;
}

// Función para reiniciar el formulario
function reiniciar() {
    texto.value = "";
    desplazamiento.value = 1;
    resultado.value = "";
    modoSelect.value = "cifrar";
}

texto.addEventListener("input", cifrado);
desplazamiento.addEventListener("input", cifrado);
modoSelect.addEventListener("change", cifrado);

cifrarDescifrarButton.addEventListener("click", cifrado);
reiniciarButton.addEventListener("click", reiniciar);
cifrado();

