/*Enunciado: Modificar un arreglo con el método splice

Dado un arreglo a, `b, y c,modificar Arreglo que modifique el arreglo de la

eliminaraelementosbdel arreglo.
Insertar el valorcen la posicionbdel arreglo.

Entrada:

arreglo: Un arreglo[1, 2, 3, 4, 5].

Salida:

El splice con los valores proporcionados.

es modificarArreglodebe eliminar 2 elementos[1, 2, 3, 4, 5]y luego 9 es[1, 2, 9, 5].*/

// const numeros = [1, 2, 3, 4, 5]

// const eliminarElementosYAgregarNuevos = (arr) =>{
//     let modificarArreglo = arr.splice(2, 2, 9)
//     return arr
// }

// console.log(eliminarElementosYAgregarNuevos(numeros));
// ___________________________________________________________________________________________________________________________________________________
/*
Para redactar un algoritmo con lenguaje JavaScript que use el método splice(), se puede seguir los siguientes pasos:
Crear una matriz con elementos.
Usar el método splice() para realizar cambios en el array.
Imprimir el arreglo resultante en la consola.

Por ejemplo, se puede establecer la siguiente entrada:
Matriz inicial:
12345

Cambios a realizar: Eliminar el elemento en el índice 2 y agregar los elementos 6 y 7 en su lugar.

La salida que debería salir en consola es:
Resultado de la matriz:126745
*/

const numeros = [1,2,3,4,5]
const eliminarElementosYAgregarNuevos = (arr) =>{
    let elimiYAgr = arr.splice(2, 1, 6, 7 )
    return arr
}

console.log(eliminarElementosYAgregarNuevos(numeros));
