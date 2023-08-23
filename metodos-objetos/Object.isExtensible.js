/*Método `isExtensible`:
Enunciado: Escribe una función que tome un objeto como entrada, y utilice el método `isExtensible`
 para determinar si el objeto puede ser extendido, es decir, si se le pueden agregar nuevas propiedades.
Entrada: Un objeto.
Salida: true si el objeto puede ser extendido; de lo contrario, false.

Ejemplo:
Entrada: isExtensible({ a: 1 })
Salida: true*/

const isExtensible = (obj) =>{
    return Object.isExtensible(obj)
}

console.log(isExtensible({ a: 1 }));

