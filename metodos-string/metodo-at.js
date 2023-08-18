/*Método `at`:
Enunciado: Escribe una función que tome una cadena y un índice como entrada, y utilice el método `at` 
para devolver el carácter en la posición dada.
Entrada: Una cadena de texto y un número entero positivo representando el índice.
Salida: El carácter en la posición indicada o undefined si el índice está fuera del rango.*/


const newStr = (str, num)=>{
    return str.at(num)
}

console.log(newStr("Hola Mundo", 5));
console.log(newStr("Mariangely", 7));


