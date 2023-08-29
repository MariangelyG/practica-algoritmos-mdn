/*Método `hasOwnProperty`:
Enunciado: Crea una función que tome un objeto y un nombre de propiedad como entrada, 
y utilice el método `hasOwnProperty` para determinar si el objeto tiene una propiedad
 propia con el nombre dado.
Entrada: Un objeto y un nombre de propiedad.
Salida: true si el objeto tiene la propiedad propia; de lo contrario, false.

Ejemplo:
Entrada: { a: 1 }.hasOwnProperty("a")
Salida: true*/


const hasOwnProperty = (propiedad) => {
    const objects = { a: 1 }
    return objects.hasOwnProperty(propiedad)
}

console.log(hasOwnProperty(("a")));
