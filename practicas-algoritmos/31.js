/*el viejo switcheroo 2
Escribe la función:

function encode(str)
que toma una cadena stry reemplaza todas las letras con sus respectivas posiciones en el alfabeto inglés.

encode('abc') == '123'   // a is 1st in English alpabet, b is 2nd and c is 3rd
encode('codewars') == '315452311819'
encode('abc-#@5') == '123-#@5'
Las cadenas distinguen entre mayúsculas y minúsculas.

// Bonus point if you don't use toLowerCase()*/

const encode = (str)=> {
    str = str.toLowerCase()
  return str.split("").map((item)=> item.replace(/[a-z]/, item.charCodeAt()-96)).join("")
   }

   console.log(encode('abc'));
   console.log(encode('ABCD'));
   console.log(encode('ZzzzZ'));
   console.log(encode('abc-#@5'));
   
   