/*Método `defineProperty`:
Enunciado: Crea una función que tome un objeto, un nombre de propiedad y un descriptor como entrada, 
y utilice el método `defineProperty` para agregar o modificar una propiedad en el objeto.
Entrada: Un objeto, un nombre de propiedad y un objeto descriptor.
Salida: El objeto con la propiedad definida o modificada.

Ejemplo:
Entrada: defineProperty({}, "a", { value: 1 })
Salida: { a: 1 }*/



// const valor= new Object(Object.prototype); 

// Object.defineProperties(valor, {
//   "a" : {
//     value: 1,
//     writable: true,
//     enumerable: true,
//   },
// })
  

// console.log(valor);


const metodoDefineProperty = (obj, key) => {
    return Object.defineProperty(obj, key,{
        value: 1, 
        enumerable: true,
    })
}

console.log(metodoDefineProperty({}, "a", { value: 1 }));
