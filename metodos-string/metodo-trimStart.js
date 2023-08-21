/* Método `trimStart`:
Enunciado: Escribe una función que tome una cadena como entrada, y utilice el método `trimStart` para eliminar los espacios en blanco al principio de la cadena.
Entrada: Una cadena de texto con espacios en blanco al principio.
Salida: La cadena sin los espacios en blanco al principio.

Ejemplo:
Entrada: trimStart("   Hello, world!")
Salida: "Hello, world!"*/

const trimStart = (str) =>{
    return str.trimStart()
}

console.log(trimStart(("    Hello, world!")));

