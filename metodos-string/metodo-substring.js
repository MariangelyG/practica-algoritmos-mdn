/*Método `substring`:
Enunciado: Escribe una función que tome una cadena, un índice de inicio y un índice de fin como entrada, y utilice el método `substring` para extraer una subcadena desde el índice de inicio hasta el índice de fin (no inclusive).
Entrada: Una cadena de texto, un número entero que representa el índice de inicio y otro número entero que representa el índice de fin.
Salida: La subcadena extraída desde el índice de inicio hasta el índice de fin.

Ejemplo:
Entrada: substring("Hello, world!", 7, 12)
Salida: "world"*/

const substring = (str) =>{
    return str.substring(7, 12)
}

console.log(substring("Hello, world!"));

