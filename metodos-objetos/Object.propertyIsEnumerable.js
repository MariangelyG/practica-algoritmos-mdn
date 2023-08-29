/*Método `propertyIsEnumerable`:
Enunciado: Crea una función que tome un objeto y un nombre de propiedad como entrada, y utilice el método 
`propertyIsEnumerable` para determinar si la propiedad dada es propia del objeto y enumerable.
Entrada: Un objeto y un nombre de propiedad.
Salida: true si la propiedad es propia y enumerable; de lo contrario, false.

Ejemplo:
Entrada: propertyIsEnumerable({ a: 1 }, "a")
Salida: true*/

const propertyIsEnumerable = (obj, propiedad) =>{
    return obj.propertyIsEnumerable(propiedad)
}

console.log(propertyIsEnumerable({ a: 1 }, "a"));
