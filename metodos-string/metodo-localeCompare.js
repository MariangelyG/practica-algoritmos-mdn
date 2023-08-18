/*Método `localeCompare`:
Enunciado: Crea una función que tome dos cadenas y un identificador de localización como entrada,
 y use el método `localeCompare` 
para comparar las cadenas según la configuración regional especificada.
Entrada: Dos cadenas de texto y una cadena con el identificador de localización 
(por ejemplo, "en-US" o "es-ES").
Salida: Un número entero que indica si la primera cadena es menor, igual o mayor 
que la segunda según las reglas de ordenación de la localización.

Ejemplo:
Entrada: localeCompare("apple", "banana", "en-US")
Salida: -1*/

const localeCompare =(str, localizador)=>{
    return str.localeCompare(localizador)
}


console.log(localeCompare("a", "c"));
console.log(localeCompare("apple", "banana"));
console.log(localeCompare("banana","apple"));
console.log(localeCompare("apple","apple"));


