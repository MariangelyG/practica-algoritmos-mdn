/*Enunciado:
Escribe una función llamada verificarArray que tome como entrada un valor y verifique si es un array o no.
 La función debe devolver true si el valor es un array, o false en caso contrario.

Entrada:
Un valor que puede ser de cualquier tipo de dato.

Ejemplo de entrada:
const valor1 = [1, 2, 3];
const valor2 = "Hola";
Salida:
true si el valor es un array, o false en caso contrario.

Ejemplo de salida (para los ejemplos de entrada):
true
false*/

const valor1 = [1, 2, 3]
const valor2 = "Hola";

const verificarArray = (valores) => Array.isArray(valores)

console.log(verificarArray(valor1));
console.log(verificarArray(valor2))