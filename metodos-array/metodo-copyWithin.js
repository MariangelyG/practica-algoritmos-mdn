/*
El método copyWithin() copia superficialmente parte de una matriz a otra ubicación en la misma matriz y la devuelve sin modificar su longitud.
Ejercicio: Copiar elementos dentro de un array

Descripción:
Escribe una función llamada copiarElementos que tome tres parámetros: un array de origen, 
una posición de destino y una posición de inicio. La función debe utilizar el método copyWithin()
para copiar los elementos desde la posición de inicio hacia la posición de destino dentro del mismo array. 
La función debe devolver el array modificado.

Instrucciones:
1. Declara una función llamada copiarElementos que acepte tres parámetros: array, posicionDestino y posicionInicio.
2. Dentro de la función, utiliza el método copyWithin() del array para copiar los elementos desde la posición de inicio hacia 
la posición de destino.Puedes utilizar array.copyWithin(posicionDestino, posicionInicio) para realizar la copia.
3. Devuelve el array modificado utilizando la declaración return.
4. Prueba tu función llamándola con diferentes arrays, posiciones de destino y posiciones de inicio para verificar que 
copie correctamente los elementos dentro del array.
*/

    let palabras = ["Mesa", "Silla", "Tenedor", "Cama"]
    let numeros = [1,2,3,4,5,6]

    const copiarElementos = (array, posicionDestino, posicionInicio) => {
        return array.copyWithin(posicionDestino, posicionInicio)
    }


    console.log(copiarElementos(palabras, 2, 1))
    console.log(copiarElementos(numeros, 2, 1));
