/*Método `startsWith`:
Enunciado: Crea una función que tome una cadena y un valor de búsqueda como entrada, y utilice el método `startsWith` 
para determinar si la cadena comienza con el valor dado.
Entrada: Una cadena de texto y otra cadena de texto que representa el valor de búsqueda.
Salida: true si la cadena comienza con el valor de búsqueda; de lo contrario, false.

Ejemplo:
Entrada: startsWith("Hello, world!", "Hello")
Salida: true*/


const startsWith = (str) =>{
    return str.startsWith("Hello")
}

console.log(startsWith("Hello, world!"));

