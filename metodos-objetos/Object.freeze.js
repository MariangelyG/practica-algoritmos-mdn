/*Método `freeze`:
Enunciado: Crea una función que tome un objeto como entrada, y 
utilice el método `freeze` para hacer que el objeto sea inmutable, es decir, 
sus propiedades no pueden ser modificadas.
Entrada: Un objeto.
Salida: El mismo objeto, pero inmutable.

Ejemplo:
Entrada: freeze({ a: 1, b: 2 })
Salida: El objeto original, pero inmutable.*/


const freeze = (obj)=>{
    return Object.freeze(obj)


}

console.log(freeze({ a: 1, b: 2 }));
