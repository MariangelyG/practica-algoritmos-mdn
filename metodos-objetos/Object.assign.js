/*Método `assign`:
Enunciado: Escribe una función que tome dos o más objetos como entrada, y utilice el método `assign` 
para combinar sus propiedades en un solo objeto.
Entrada: Dos o más objetos.
Salida: Un nuevo objeto que contiene todas las propiedades de los objetos combinados.

Ejemplo:
Entrada: assign({ a: 1 }, { b: 2 }, { c: 3 })
Salida: { a: 1, b: 2, c: 3 }*/

const assig = (obj1, obj2, obj3)=>{
    return Object.assign(obj1, obj2, obj3);
}

console.log(assig({ a: 1 }, { b: 2 }, { c: 3 }));

