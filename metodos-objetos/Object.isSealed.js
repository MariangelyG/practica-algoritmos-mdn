/*Método `isSealed`:
Enunciado: Escribe una función que tome un objeto como entrada, y utilice el método `isSealed`
 para determinar si el objeto está sellado, es decir, si sus propiedades no pueden ser eliminadas ni agregadas, 
 pero aún pueden ser modificadas.
Entrada: Un objeto.
Salida: true si el objeto está sellado; de lo contrario, false.

Ejemplo:
Entrada: isSealed({ a: 1 })
Salida: false*/


const isSealed = (obj) =>{
    return Object.isSealed(obj)
}

console.log(isSealed({ a: 1 }));
