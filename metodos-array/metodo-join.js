/*Escribe una función llamada convertirAString que tome como entrada un array de palabras y 
devuelva una cadena de caracteres que contenga todas las palabras concatenadas y separadas por un guion ("-").

Entrada:
Un array de palabras.

Ejemplo de entrada:

javascript
const palabras = ["Hola", "mundo", "desde", "JavaScript"];
Salida:
Una cadena de caracteres que contiene todas las palabras del array concatenadas y separadas por un guion ("-").

Ejemplo de salida (para la entrada de ejemplo):
"Hola-mundo-desde-JavaScript"*/

const palabras = ["Hola", "mundo", "desde", "JavaScript"]
const convertirAString = (string) => {
    return string.join("-")
}

console.log(convertirAString(palabras));
