/*Método `padStart`:
Enunciado: Crea una función que tome una cadena, una longitud y un relleno como entrada, y use el método
 `padStart` 
para agregar caracteres de relleno al principio de la cadena hasta alcanzar la longitud especificada.
Entrada: Una cadena de texto, un número entero positivo que representa la longitud deseada y una 
cadena de texto que representa el relleno.
Salida: La cadena original con caracteres de relleno añadidos al principio hasta alcanzar la longitud 
especificada.

Ejemplo:
Entrada: padStart("42", 5, "0")
Salida: "00042"*/

const padStart = (str) =>{
    return str.padStart(5,0)
}

console.log(padStart("42"));

