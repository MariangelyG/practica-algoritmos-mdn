/*Enunciado: Ordenar un arreglo
Escribe una funciónordenarArreglo

Entrada:
const arregloInicial = [5, 2, 9, 1, 7];

Salida:
Resultado esperado[1, 2, 5, 7, 9]
esordenarArregloa[5, 2, 9, 1, 7]como entrada y debe[1, 2, 5, 7, 9], si

grabaciónsort()modifica el arreglo original, por lo que si deseas mantener el arreglo original sin cambios, 
debes crear una copia antes de aplicar el
*/

const arregloInicial = [5, 2, 9, 1, 7];
const ordenarArreglo = (arr) =>{
    let copiArr = [...arr]
    let arrOrdenado = arr.sort()
    return arrOrdenado
}

console.log(ordenarArreglo(arregloInicial));
