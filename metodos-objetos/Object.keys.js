/*Método `keys`:
Enunciado: Crea una función que tome un objeto como entrada, y utilice el método `keys` para obtener 
un arreglo de las claves de todas las propiedades propias enumerables del objeto.
Entrada: Un objeto.
Salida: Un arreglo de las claves de las propiedades propias enumerables del objeto.

Ejemplo:
Entrada: keys({ a: 1, b: 2 })
Salida: ["a", "b"]*/

const keys = (obj) =>{
    return Object.keys(obj)
}

console.log(keys({ a: 1, b: 2 }));

