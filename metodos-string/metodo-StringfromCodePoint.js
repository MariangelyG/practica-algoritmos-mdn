/*8. Método `fromCodePoint`:
Enunciado: Crea una función que tome un punto de código Unicode (o una lista de puntos de código) como entrada, y use el método `fromCodePoint` para convertirlo en su carácter correspondiente.
Entrada: Un punto de código Unicode (o una lista de puntos de código).
Salida: El carácter correspondiente al punto de código o una cadena vacía si no se proporciona ningún punto de código.
*/

const fromCharCode =(...num)=>{
    return String.fromCodePoint(...num)
}

console.log(fromCharCode(97, 32, 56, 42));
console.log(fromCharCode(100, 105, 605, 503));
