/*Método `toString`:
Enunciado: Escribe una función que tome un objeto como entrada, y utilice el método `toString` 
para obtener una representación de cadena del objeto.
Entrada: Un objeto.
Salida: La representación de cadena del objeto.

Ejemplo:
Entrada: toString({ a: 1, b: 2 })
Salida: "[object Object]"*/


const toString = (obj) =>{
    return obj.toString()
}

console.log(toString({ a: 1, b: 2 }));
