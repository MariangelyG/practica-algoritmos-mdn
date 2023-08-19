/*Método `padEnd`:
Enunciado: Escribe una función que tome una cadena, una longitud y un relleno como entrada, y use el método
 `padEnd` para agregar caracteres de relleno al final de la cadena hasta alcanzar la longitud especificada.
Entrada: Una cadena de texto, un número entero positivo que representa la longitud deseada y una cadena
 de texto que representa el relleno.
Salida: La cadena original con caracteres de relleno añadidos al final hasta alcanzar la longitud especificada.

Ejemplo:
Entrada: padEnd("Hello", 10, "!")
Salida: "Hello!!!!!!"*/

const padEnd = (str)=>{
    return str.padEnd(10,"!")
}

console.log(padEnd("Hello"));
