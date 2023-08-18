/*Método `match`:
Enunciado: Escribe una función que tome una cadena y una expresión regular como entrada,
 y use el método `match` para encontrar todas las coincidencias de la expresión regular en la cadena.
Entrada: Una cadena de texto y una expresión regular.
Salida: Un arreglo con todas las coincidencias encontradas o null si no hay coincidencias.

Ejemplo:
Entrada: match("The quick brown fox jumps over the lazy dog", /\b\w{5}\b/g)
Salida: ["quick", "brown", "jumps"]*/

const match = (str)=>{
    return str.match(/\b\w{5}\b/g)
}

console.log(match("The quick brown fox jumps over the lazy dog"));

