/*Método `values`:
Enunciado: Escribe una función que tome un objeto como entrada, y utilice el método `values`
 para obtener un iterador de los valores de todas las propiedades propias enumerables del objeto.
Entrada: Un objeto.
Salida: Un iterador de los valores de las propiedades propias enumerables del objeto.

Ejemplo:
Entrada: values({ a: 1, b: 2 })
Salida:[1, 2] */

const values = (obj) =>{
    return Object.values(obj)
}

console.log(values({ a: 1, b: 2 }));

