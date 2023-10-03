/*Principiante - Perdido sin mapa
Dada una matriz de números enteros, devuelve una nueva matriz con cada valor duplicado.

Por ejemplo:

[1, 2, 3] --> [2, 4, 6]*/

const maps = (x)=> {
    return x.map((num)=> num *2)
}

console.log(maps([1, 2, 3]));
console.log(maps([4, 1, 1, 1, 4]));
console.log(maps([2, 2, 2, 2, 2, 2]));

