/*Imprimir elementos de matriz con delimitadores de coma
Entrada: Matriz de elementos

["Hola"]

Salida: Cadena con elementos delimitados por comas de la matriz en el mismo orden.

"Hola"

Nota: si esto le parece demasiado simple, intente con el siguiente nivel*/

const printArray = (array)=> {
    return array.join(", ")
  }

  console.log(printArray([2,4,5,2]));

  
  