/*Ejercicio: Agregar elementos al inicio de un arreglo

Entrada:

arreglo: Un arreglo de elementos.
valor: El valor que se desea agregar al inicio del arreglo
const arregloInicial = [2, 3, 4, 5]

Salida: 
Un nuevo arreglo que contiene el valor agregado al inicio del arreglo original.
/ Resultado esperado: [1, 2, 3, 4, 5]*/

// const arregloInicial = [4, 5, 6, 7, 8, 9]

// const agregarElementosAlInicio = (arr) => {
//  let agrgar = arr.unshift(1,2,3)
//  return arr
// }

// console.log(agregarElementosAlInicio(arregloInicial));

// ______________________________________________________________________________________________________________________________-

/*Para utilizar el método unshift() en JavaScript, se pueden seguir los siguientes pasos:
Crear una matriz con elementos.
Usar el método unshift() para agregar uno o más elementos al inicio del arreglo.
Imprimir el arreglo resultante en la consola.
Por ejemplo, se puede establecer la siguiente entrada:
Formación:12345
Elemento a agregar: 0
La salida que debería salir en consola es:
Resultado de la matriz:
012345*/

const num = [1,2,3,4,5]
const agrgarElementoAlInicio= (arr)=>{
    let agr = arr.unshift(0)
    return arr
}

console.log(agrgarElementoAlInicio(num));

