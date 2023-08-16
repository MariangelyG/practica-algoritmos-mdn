/*Ejercicio: Extraer elementos de un arreglo
mi extraerElementos que tome un arreglo inicio y`fin) 
como entrada.splice()para extraer inicio hasta el fin índice fin). Luego, deberá devolver un nuevo arreglo con los elementos extraídos.

Entrada:
const arregloInicial = [1, 2, 3, 4, 5];
arreglo: Un arreglo de elementos.


Salida: 
Resultado esperado: [2, 3, 4]
Un nuevo arreglo que contiene los elementos extraídos desde el índice `inicioiniciohasta el índice fin.*/

const arregloInicial = [1, 2, 3, 4, 5]

const extraerElementos = (arr) =>{
    let copiArr = [...arr]
    let modificado = arr.splice(1,3)
    return  modificado
}

console.log(extraerElementos(arregloInicial));
