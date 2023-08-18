/*10. Método `indexOf`:
Enunciado: Crea una función que tome una cadena y un valor de búsqueda como entrada,
 y use el método `indexOf` para encontrar la primera aparición del valor de búsqueda en la cadena.
Entrada: Una cadena de texto y otra cadena de texto que representa el valor de búsqueda.
Salida: El índice de la primera aparición del valor de búsqueda en la cadena o -1 si no se encuentra.
*/

const indexOf = (str, vBusqueda) =>{
    return str.indexOf(vBusqueda)
}

console.log(indexOf("Hola", "l"));
console.log(indexOf("Hola Mundo", "H"));
console.log(indexOf("Mariangely", "y"));
console.log(indexOf("Me gusta el helado", "e"));
