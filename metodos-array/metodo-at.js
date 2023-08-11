/* El método at() recibe un valor numérico entero y devuelve el elemento en esa posición, permitiendo valores positivos y negativos.
Los valores negativos contarán desde el último elemento del array.

   const numbers = [3, 5, 20, 35, 24, 66];
    const metodoAt = (arr) =>{
    return arr.at()
 }

    const number1 = metodoAt(numbers)
    console.log(number1);
*/

/*Declara una función llamada obtenerValor que acepte dos

    1. Declara una función llamada obtenerValor que acepte dos parámetros: array y posicion.
    2. Dentro de la función, utiliza el método Array.at() para obtener el valor en la posición especificada del array. 
    3. Agrega una condición para verificar si la posición está dentro del rango válido del array. 
    Puedes hacer esto comparando la posición con la longitud del array utilizando un condicional if.
    4. Si la posición está dentro del rango válido, devuelve el valor obtenido en el paso anterior utilizando la 
    declaración return.
    5.Si la posición está fuera del rango válido, devuelve la cadena de texto "Posición inválida" utilizando la declaración return.
    6. Prueba tu función llamándola con diferentes arrays y posiciones para asegurarte de que devuelve los valores correctos 
    y maneja las posiciones inválidas adecuadamente.*/

    let palabrasLargas = ["platano", "lechuga", "manzana", "brocoli"]
    let palabrasCortas = ["cambur", "kiwi", "uvas"]

    const obtenerValor = (array, posicion) =>{
    if(posicion < array.length) {
        return array.at(posicion) 
    }else{
        return "Posicion Invalida"
    }
}
console.log(obtenerValor(palabrasLargas, 0))
console.log(obtenerValor(palabrasLargas, 1))
console.log(obtenerValor(palabrasLargas, 4));
console.log(obtenerValor(palabrasCortas, 0))
console.log(obtenerValor(palabrasCortas, 1))
console.log(obtenerValor(palabrasCortas, 2));
