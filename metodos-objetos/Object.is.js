/*Método `is` (Personalizado):
Enunciado: Escribe una función que tome dos valores como entrada, 
y utilice una comparación personalizada para determinar si los dos valores 
son idénticos en términos de sus propiedades y prototipos (es decir, profundidad).
Entrada: Dos valores.
Salida: true si los valores son idénticos; de lo contrario, false.

Ejemplo:
Entrada: is({ a: 1 }, { a: 1 })
Salida: true*/

const obj1 = ({ a: 1 }, { a: 1 })
const obj2 = obj1

const metodoIs =(obj1,obj2) => {

    return Object.is(obj1, obj2)

}

console.log(metodoIs(obj1, obj2));

