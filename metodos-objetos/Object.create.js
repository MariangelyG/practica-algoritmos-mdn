/*Método `create`:
Enunciado: Crea una función que tome un objeto como entrada, y utilice el método `create` 
para crear un nuevo objeto con el prototipo establecido al objeto dado.
Entrada: Un objeto.
Salida: Un nuevo objeto que hereda las propiedades y métodos del objeto dado.

Ejemplo:
Entrada: create({ a: 1, b: 2 })
Salida: Un nuevo objeto con prototipo { a: 4, b: 5 }*/


const create =(obj)=>{
   const me = Object.create(obj)
   me.a = 4;
   me.b = 5
   return me
}

console.log(create({ a: 1, b: 2 }));



// se llama la variable, se llama cada propiedad y se asigna un nuevo valor. 
