/*Método `trim`:
Enunciado: Escribe una función que tome una cadena como entrada, y utilice el método `trim`
 para eliminar los espacios en blanco al principio y al final de la cadena.
Entrada: Una cadena de texto con espacios en blanco al principio y/o al final.
Salida: La cadena sin los espacios en blanco al principio ni al final.

Ejemplo:
Entrada: trim("   Hello, world!   ")
Salida: "Hello, world!"*/ 

const trim = (str)=>{
    return str.trim()
}


    console.log(trim("   Hello, world!   "));
    
