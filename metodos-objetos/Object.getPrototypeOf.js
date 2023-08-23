/*Método `getPrototypeOf`:
Enunciado: Crea una función que tome un objeto como entrada, y utilice el método 
`getPrototypeOf` para obtener el prototipo del objeto.
Entrada: Un objeto.
Salida: El prototipo del objeto.

Ejemplo:
Entrada: getPrototypeOf(Object.create({ a: 1 }))
Salida: { a: 1 }*/

const getPrototypeOf = (obj)=>{
    const objeto = Object.create(obj)
    return Object.getPrototypeOf(objeto)
}


console.log(getPrototypeOf(({ a: 1 })));
