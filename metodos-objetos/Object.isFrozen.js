/*Método `isFrozen`:
Enunciado: Crea una función que tome un objeto como entrada, y utilice el método `isFrozen` para determinar si el 
objeto es inmutable, es decir, si sus propiedades no pueden ser modificadas.
Entrada: Un objeto.
Salida: true si el objeto es inmutable; de lo contrario, false.

Ejemplo:
Entrada: isFrozen({ a: 1 })
Salida: false*/

const isFrozen = (obj) =>{
    return Object.isFrozen(obj)
}

console.log(isFrozen({ a: 1 }));

