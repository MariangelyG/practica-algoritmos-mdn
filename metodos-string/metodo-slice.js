/*Método `slice`:
Enunciado: Escribe una función que tome una cadena, un índice de inicio y un índice de fin como entrada, y use el método `slice` 
para extraer una porción de la cadena desde el índice de inicio (inclusive) hasta el índice de fin (no inclusive).
Entrada: Una cadena de texto, un número entero que representa el índice de inicio y otro número entero que representa el índice de fin.
Salida: La porción de la cadena extraída desde el índice de inicio hasta el índice de fin.

Ejemplo:
Entrada: slice("Hello, world!", 7, 12)
Salida: "world"*/

const slice = (str) =>{
    return str.slice(7,12)
}

console.log(slice("Hello, world!"));