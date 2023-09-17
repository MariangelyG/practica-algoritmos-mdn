/*Puede imprimir su nombre en un anuncio publicitario. Descubra cuánto le costará. Cada carácter tiene un precio predeterminado de £ 30, pero eso puede ser diferente si se le dan 2 parámetros en lugar de 1 (siempre 2 para Java).

No puede usar el operador multiplicador "*".

Si su nombre fuera Jeong-Ho Aristotelis, el anuncio le costaría 600 libras esterlinas. 20 letras * 30 = 600 (el espacio cuenta como un carácter).
*/
const billboard = (name, price = 30) =>{
return name.split("").map((item)=> item.length + price-1).reduce((acc,item)=> acc+item)
} 

console.log(billboard("Jeong-Ho Aristotelis"));
console.log(billboard("Abishai Charalampos"));
console.log(billboard("Idwal Augustin"));
console.log(billboard("Hadufuns John",20));
console.log(billboard("Zoroaster Donnchadh"));
console.log(billboard("Claude Miljenko"));
console.log(billboard("Werner Vígi",15));
