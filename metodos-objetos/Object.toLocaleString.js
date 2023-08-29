/*Método `toLocaleString`:
Enunciado: Crea una función que tome un objeto como entrada, y utilice el método `toLocaleString`
 para obtener una representación de cadena localizada del objeto.
Entrada: Un objeto.
Salida: La representación de cadena localizada del objeto.

Ejemplo:
Entrada: toLocaleString({ a: 1, b: 2 })
Salida: "[object Object]"*/

const toLocaleString =(obj) =>{
    return obj.toLocaleString()
}

console.log(toLocaleString({ a: 1, b: 2 }));

