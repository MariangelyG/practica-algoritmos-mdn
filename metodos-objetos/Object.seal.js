/*Método `seal`:
Enunciado: Escribe una función que tome un objeto como entrada, y utilice el método `seal` para hacer que el objeto sea sellado,
 es decir, sus propiedades no pueden ser eliminadas ni agregadas, pero aún pueden ser modificadas.
Entrada: Un objeto.
Salida: El mismo objeto, pero sellado.

Ejemplo:
Entrada: seal({ a: 1, b: 2 })
Salida: El objeto original, pero sellado.*/

const seal = (obj) =>{
    return Object.seal(obj)
}

console.log(seal({ a: 1, b: 2 }));

