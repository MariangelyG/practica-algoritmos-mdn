/*Método `repeat`:
Enunciado: Escribe una función que tome una cadena y un número entero no negativo como entrada, 
y use el método `repeat` para repetir la cadena la cantidad de veces especificada.
Entrada: Una cadena de texto y un número entero no negativo.
Salida: La cadena repetida la cantidad de veces especificada.

Ejemplo:
Entrada: repeat("abc", 3)
Salida: "abcabcabc"*/

const repeat = (str) =>{
    return str.repeat(3)
}


console.log(repeat("abc"));
