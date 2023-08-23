/*Método `getOwnPropertySymbols`:
Enunciado: Escribe una función que tome un objeto como entrada, y utilice el método 
`getOwnPropertySymbols` para obtener un arreglo de los símbolos de las propiedades
 propias del objeto.
Entrada: Un objeto.
Salida: Un arreglo de los símbolos de las propiedades propias del objeto.

Ejemplo:
Entrada: getOwnPropertySymbols({ [Symbol("a")]: 1, [Symbol("b")]: 2 })
Salida: [Symbol(a), Symbol(b)]*/

const getOwnPropertySymbols = (obj)=>{
    return Object.getOwnPropertySymbols(obj)
}

console.log(getOwnPropertySymbols({ [Symbol("a")]: 1, [Symbol("b")]: 2 }));

