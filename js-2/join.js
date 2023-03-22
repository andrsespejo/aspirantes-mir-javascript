// escribe la función join acá
function join(arreglo) {
    let cadena = "";
    arreglo.forEach(elemento => {
        cadena += elemento + " ";
    });
    return cadena.trimEnd();
}

console.log(join(["Hola", "Mundo"])) // "Hola Mundo"
console.log(join(["Make", "It", "Real"])) // "Make It Real"
console.log(join([])) // ""