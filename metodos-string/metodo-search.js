/*Método `search`:
Enunciado: Crea una función que tome una cadena y una expresión regular como entrada, y use el método `search` 
para encontrar la posición de la primera coincidencia de la expresión regular en la cadena.
Entrada: Una cadena de texto y una expresión regular.
Salida: El índice de la primera coincidencia de la expresión regular en la cadena o -1 si no se encuentra.

Ejemplo:
Entrada: search("Hello, world!", /world/)
Salida: 7*/

const search = (str) =>{
    return str.search("world")
}

console.log(search("Hello, world!"));

