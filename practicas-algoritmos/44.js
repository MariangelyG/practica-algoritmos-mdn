/*Convertir entero a binario
Convierta enteros a binario tan simple como eso. Se le daría un número entero como argumento y debe devolver su forma binaria.
 Para tener una idea sobre cómo convertir un número decimal en un número binario, visite aquí .

Notas : los números negativos deben manejarse como complemento a dos ; suponga que todos los números son enteros 
almacenados usando 4 bytes (o 32 bits) en cualquier idioma.

Su salida debe ignorar los ceros iniciales.

Ejemplos (entrada --> salida):
3  --> "11"
-3 -->"11111111111111111111111111111101"*/

const toBinary = (n) => {
    return  (n >>> 0).toString(2)
   }


console.log((toBinary(2)));
console.log(toBinary(3));
console.log(toBinary(-3));
console.log(toBinary(4));
console.log(toBinary(5));
