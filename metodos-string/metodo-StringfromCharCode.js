/*7. Método `fromCharCode`:
Enunciado: Escribe una función que tome un número entero (o una lista de números enteros) 
como entrada, y use el método `fromCharCode` para convertirlo en un carácter Unicode correspondiente.
Entrada: Un número entero o una lista de números enteros.
Salida: La representación de caracteres Unicode correspondiente o una cadena vacía
 si no se proporciona ningún número.*/


const fromCharCode =(...num)=>{
    return String.fromCharCode(...num)
}

console.log(fromCharCode(40));
console.log(fromCharCode(65));
console.log(fromCharCode(65, 97, 107, 520, 100));
