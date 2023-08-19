/*Enunciado: Crea una función que tome una cadena y un separador como entrada, y use el método `split` para dividir la
 cadena en un arreglo de subcadenas basadas en el separador dado.
Entrada: Una cadena de texto y otra cadena de texto que representa el separador.
Salida: Un arreglo de subcadenas resultante de dividir la cadena original en el separador dado.

Ejemplo:
Entrada: split("apple,orange,banana", ",")
Salida: ["apple", "orange", "banana"]*/


const split = (str) =>{
    return str.split(",")
}


console.log(split("apple,orange,banana"));
