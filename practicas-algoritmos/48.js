/*Carácter doble
Dada una cadena, debe devolver una cadena en la que cada carácter (sensible a mayúsculas y minúsculas) se repite una vez.

Ejemplos (Entrada -> Salida):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "*/

const doubleChar = (str)=> {
    return str.split("").map((item)=> item+item).join("")
  }

  
  console.log(doubleChar("abcd"));
  console.log(doubleChar("Adidas"));
  console.log(doubleChar("1337"));
  console.log(doubleChar("illuminati"));
  console.log(doubleChar("123456"));
  console.log(doubleChar("%^&*("));
  
  
  

  