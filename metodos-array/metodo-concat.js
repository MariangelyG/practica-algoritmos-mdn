// El método concat() se usa para unir dos o más arrays. Este método no cambia los arrays existentes, 
// sino que devuelve un nuevo array.

// Ejercicio: Combinar dos arrays en uno nuevo

// Descripción:
// Escribe una función llamada combinarArrays que tome dos arrays como parámetros y utilice el método concat()
//  para combinarlos en un nuevo array. La función debe devolver el nuevo array resultante de la combinación.

// Instrucciones:
// 1. Declara una función llamada combinarArrays que acepte dos parámetros: array1 y array2.
// 2. Dentro de la función, utiliza el método concat() para combinar array1 y array2 en un nuevo array. 
// Asigna el resultado a una variable llamada resultado.
// 3. Devuelve el nuevo array resultado utilizando la declaración return.
// 4. Prueba tu función llamándola con diferentes arrays y verifica que el resultado sea el array combinado correctamente.

let  letras1 = ['a', 'b', 'c', 'd'];
let letras2 = ['e', 'f', 'g', 'h'];

let  num1 = [1, 2, 3];
let num2 = [4, 5, 6];

const combinarArrays = (array1, array2) =>{
    const resultado = array1.concat(array2)
    return resultado
}

console.log(combinarArrays(letras1,letras2));
console.log(combinarArrays(num1,num2));

