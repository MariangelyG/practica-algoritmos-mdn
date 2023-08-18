/*4. Método `codePointAt`:
Enunciado: Crea una función que tome una cadena y un índice como entrada, y use el método `codePointAt` 
para obtener el valor del punto de código Unicode del carácter en la posición dada.
Entrada: Una cadena de texto y un número entero no negativo que representa el índice.
Salida: El valor del punto de código Unicode del carácter en la posición indicada o undefined 
si el índice está fuera del rango.*/

const codePointAt= (str, num)=>{
    return str.codePointAt(num)
}

console.log(codePointAt("A",0))
console.log(codePointAt("Hola mundo", 3));

