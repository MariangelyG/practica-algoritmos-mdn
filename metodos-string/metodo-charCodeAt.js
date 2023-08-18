/*3. Método `charCodeAt`:
Enunciado: Escribe una función que tome una cadena y un índice como entrada, y utilice el método `charCodeAt` 
para obtener el valor del código ASCII del carácter en la posición dada.
Entrada: Una cadena de texto y un número entero no negativo que representa el índice.
Salida: El valor del código ASCII del carácter en la posición indicada o NaN si el índice está fuera del rango.*/

const charCodeAt = (str, num)=>{
    return str.charCodeAt(num)
}

console.log(charCodeAt("Mariangely", 3));
console.log(charCodeAt("Mariangely", 1));

