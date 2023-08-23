/*Método `defineProperties`:
Enunciado: Escribe una función que tome un objeto y un descriptor de propiedades como entrada, y utilice el método 
`defineProperties` para agregar o modificar múltiples propiedades en el objeto.
Entrada: Un objeto y un objeto que contiene descriptores de propiedades.
Salida: El objeto con las propiedades definidas o modificadas.

Ejemplo:
Entrada: defineProperties({}, { a: { value: 1 }, b: { value: 2 } })
Salida: { a: 1, b: 2 }*/

const values= new Object(Object.prototype); 

Object.defineProperties(values, {
  "a" : {
    value: 1,
    writable: true,
    enumerable: true,
  },
  "b" : {
    value: 2,
    writable: true,
    enumerable: true,
  }
})
  

console.log(values);


