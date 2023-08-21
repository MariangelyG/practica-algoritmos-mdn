/*Método `trimEnd`:
Enunciado: Crea una función que tome una cadena como entrada, y utilice el método `trimEnd` para 
eliminar los espacios en blanco al final de la cadena.
Entrada: Una cadena de texto con espacios en blanco al final.
Salida: La cadena sin los espacios en blanco al final.

Ejemplo:
Entrada: trimEnd("Hello, world!   ")
Salida: "Hello, world!*/

const trimEnd =(str)=>{
    return str.trimEnd()
}

console.log(trimEnd("Hello, world!       "));

