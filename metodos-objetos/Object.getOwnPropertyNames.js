/*Método `getOwnPropertyNames`:
Enunciado: Crea una función que tome un objeto como entrada, y utilice el método 
`getOwnPropertyNames` para obtener un arreglo de las propiedades propias enumerables 
del objeto.
Entrada: Un objeto.
Salida: Un arreglo de las propiedades propias enumerables del objeto.

Ejemplo:
Entrada: getOwnPropertyNames({ a: 1, b: 2 })
Salida: ["a", "b"]*/


const getOwnPropertyNames=(obj)=>{
    return Object.getOwnPropertyNames(obj)
}

console.log(getOwnPropertyNames({ a: 1, b: 2 }));
