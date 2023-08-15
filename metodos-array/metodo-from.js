/*Enunciado:
Escribe una función llamada obtenerCaracteresUnicos que tome como entrada una cadena de caracteres y devuelva un nuevo 
array con todos los 
caracteres únicos presentes en la cadena, sin duplicados.

Entrada:
Una cadena de caracteres.

Ejemplo de entrada:
const cadena = "abracadabra";
Salida:
El array resultante con los caracteres únicos de la cadena.

Ejemplo de salida
['a', 'b', 'r', 'c', 'd']*/

const cadena = "abracadabra"

const  obtenerCaracteresUnicos = (string) => {return Array.from(new Set(string))}


console.log(obtenerCaracteresUnicos(cadena))
