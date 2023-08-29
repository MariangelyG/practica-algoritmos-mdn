/*Método `valueOf`:
Enunciado: Crea una función que tome un objeto como entrada, y utilice el método `valueOf` 
para obtener el valor primitivo del objeto.
Entrada: Un objeto.
Salida: El valor primitivo del objeto.

Ejemplo:
Entrada: valueOf({ a: 1 })
Salida: { a: 1 }*/

const valueOf = (object) =>{
    return object.valueOf()
}

console.log(valueOf({ a: 1 }));

