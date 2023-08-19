/*Método `replaceAll`:
Enunciado: Escribe una función que tome una cadena, una expresión regular o una cadena de búsqueda y 
un valor de reemplazo como entrada, y use el método `replaceAll` 
para reemplazar todas las apariciones de la búsqueda con el valor de reemplazo.
Entrada: Una cadena de texto, una expresión regular o una cadena de búsqueda y un valor 
de reemplazo (puede ser una cadena de texto o una función de reemplazo).
Salida: La cadena resultante después de realizar los reemplazos.

Ejemplo:
Entrada: replaceAll("The quick brown fox jumps over the lazy dog", /o/g, "oo")
Salida: "The quick broown fox jumps over the lazy doog"*/


const replaceAll = (str) =>{
    return str.replaceAll(/o/g, "oo")
}


console.log(replaceAll("The quick brown fox jumps over the lazy dog"));
