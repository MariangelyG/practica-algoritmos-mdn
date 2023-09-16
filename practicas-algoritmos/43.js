/*Capitulares
DropCaps significa que la primera letra de la palabra inicial del párrafo debe estar en mayúsculas y el resto en minúsculas, tal como se ve en el periódico.

Pero para variar, hagamos eso para todas y cada una de las palabras de la cadena dada. Su tarea es poner en mayúsculas cada palabra que 
tenga una longitud superior a 2, dejando las palabras más pequeñas como están.

*debería funcionar también en los espacios iniciales y finales y en mayúsculas.

"apple"            => "Apple"
"apple of banana"  => "Apple of Banana"
"one   space"      => "One   Space"
"   space WALK   " => "   Space Walk   " 
Nota: se le proporcionará al menos una palabra y debe tomar una cadena como entrada y devolver una cadena como salida.*/

const dropCap = (n)=> {
   return n.split(" ").map((item)=> item.length > 2 ? item[0].toUpperCase() + item.slice(1).toLowerCase() : n).join(" ")
   }

console.log(dropCap('Apple Banana'));
console.log(dropCap('Apple'));
console.log(dropCap('Revelation of the contents outraged American public opinion, and helped generate'));
console.log(dropCap('more  than    one space between words'));
console.log(dropCap('of'));
