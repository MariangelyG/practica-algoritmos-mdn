/*Ejercicio: Invertir un arreglo
Entrada:
const numeros = [1, 2, 3, 4, 5]

Implementar invertirArreglo usando elreverse()de JavaScript para invertir el orden de los elementos en el arreglo. 

Salida:
Resultado esperado: [5, 4, 3, 2, 1]*/

const numeros = [1, 2, 3, 4, 5]

const reversedArray =(arr) =>{
  let nuevoArr = [...arr]
  let reverse = arr.reverse()
  return reverse
}

console.log(reversedArray(numeros));

