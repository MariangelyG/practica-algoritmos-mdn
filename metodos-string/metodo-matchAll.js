/*Método `matchAll`:
Enunciado: Crea una función que tome una cadena y una expresión regular como entrada, y use el método `matchAll` 
para encontrar todas las coincidencias de la expresión regular en la cadena.
Entrada: Una cadena de texto y una expresión regular.
Salida: Un iterador que contiene todos los resultados de las coincidencias encontradas.

Ejemplo:
Entrada: matchAll("Hello, world! Welcome, world!", /\b\w+\b/g)
Salida: Un iterador que contiene todas las palabras en la cadena.*/

const matchAll = (str) =>{
let regex = [...str.matchAll(/\b\w+\b/g)]
return regex 
}

console.log(matchAll("Hello, world! Welcome, world!"));

