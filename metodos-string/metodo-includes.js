/*9. Método `includes`:
Enunciado: Escribe una función que tome una cadena y un valor de búsqueda como entrada, y 
utilice el método `includes` para determinar si la cadena contiene el valor buscado.
Entrada: Una cadena de texto y otra cadena de texto que representa el valor de búsqueda.
Salida: true si la cadena contiene el valor de búsqueda; de lo contrario, false.
*/

const includes= (str, word)=>{
    return str.includes(word)
}

console.log(includes("Hola Mundo", "Hola"));
console.log(includes("Hola Mundo", "mundo"));

