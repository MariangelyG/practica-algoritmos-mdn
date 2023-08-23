/*Método `entries`:
Enunciado: Escribe una función que tome un objeto como entrada, y utilice el método `entries` 
para obtener un arreglo de arreglos [key, value] que representen las propiedades del objeto.
Entrada: Un objeto.
Salida: Un arreglo de arreglos [key, value] que representa las propiedades del objeto.

Ejemplo:
Entrada: entries({ a: 1, b: 2 })
Salida: [["a", 1], ["b", 2]]*/


const entries = (obj) =>{
    return Object.entries(obj)
}

console.log(entries({ a: 1, b: 2 }));
