/*Letras ASCII de Número
Debe crear una función que convierta el entero dado como cadena en letras mayúsculas ASCII o espacios.

Todos los caracteres ASCII tienen su orden numérico en la tabla.

Por ejemplo,

from ASCII table, character of number 65 is "A".*/

const convert = (number)=>{
    return number.match(/.{2}/g).map(n => String.fromCharCode(n)).join('')

}



  console.log(convert("65"));
  console.log(convert("656667"));
  console.log(convert("676584"));
  console.log(convert("73327673756932858080698267658369"));
  