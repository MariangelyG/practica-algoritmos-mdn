/*Ejercicio 1: Formatear un número a una cadena con separadores de millas

Escribe una función llamada formatearNumero que tome
Entrada:
numero: Un número entero o decimal.
const numero = 1234567.89;
Salida:

"1,234,567.89"*/

// const numero = 1234567.89;

// const formatearNumero = (arr) =>{
//     return arr.toLocaleString()
// }

// console.log(formatearNumero(numero));
// _______________________________________________________________________________________________________________________________________

/*Para utilizar el método toLocaleString() en un array en JavaScript, se pueden seguir los siguientes pasos:
Crear una matriz con elementos.
Usar el método toLocaleString() para convertir los elementos del arreglo a una cadena de texto usando las configuraciones locales.
Imprimir la cadena de texto resultante en la consola.

Por ejemplo, se puede establecer la siguiente entrada:
Matriz: [1000, 2000, 3000, 4000]

La salida que debería salir en consola es:
Cadena de texto resultante: "1,000, 2,000, 3,000, 4,000"

Este algoritmo utiliza el método toLocaleString() para convertir los elementos de una matriz a una cadena de texto en formato localizado. 
En este caso, se representan los elementos del array [1000, 2000, 3000, 4000] en el formato "1,000, 2,000, 3,000, 4,000".
 Finalmente, se imprime la cadena de texto resultante en la consola.*/

const miles =  [1000, 2000, 3000, 4000]


const arrAStr = (arr) =>{
    return arr.toLocaleString()
}

console.log(arrAStr(miles));



