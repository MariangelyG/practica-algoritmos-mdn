/*Método `hasOwn` (Personalizado):
Enunciado: Escribe una función que tome un objeto y un nombre de propiedad como entrada,
 y utilice una verificación personalizada para determinar si el objeto tiene una propiedad 
 propia con el nombre dado.
Entrada: Un objeto y un nombre de propiedad.
Salida: true si el objeto tiene la propiedad propia; de lo contrario, false.

Ejemplo:
Entrada: hasOwn({ a: 1 }, "a")
Salida: true*/


const hasOwn = (obj, propiedad) =>{
    return Object.hasOwn(obj, propiedad)
}

console.log(hasOwn({ a: 1 }, "a"));
console.log(hasOwn({ a: 1 }, "b"));

