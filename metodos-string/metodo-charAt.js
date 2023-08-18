/*2. Método `charAt`:
Enunciado: Crea una función que tome una cadena y un índice como entrada, y use el método `charAt` 
para devolver el carácter en la posición dada.
Entrada: Una cadena de texto y un número entero no negativo que representa el índice.
Salida: El carácter en la posición indicada o una cadena vacía si el índice está fuera del rango.*/

const metodoCharAt = (str, num)=>{
    return str.charAt(num)
}

console.log(metodoCharAt("Me gusta el chocolate", 0));
console.log(metodoCharAt("Me gusta el chocolate", 3));



