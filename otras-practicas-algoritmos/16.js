/*CASO DE CUERDA EXTRAÑO
Escriba una función que acepte una cadena y devuelva la misma cadena con todos los caracteres indexados pares de cada palabra 
en mayúsculas y todos los caracteres indexados impares de cada palabra en minúsculas. La indexación que acabamos de explicar está 
basada en cero, por lo que el índice ceroésimo es par, por lo tanto, ese carácter debe estar en mayúsculas y debe comenzar de nuevo 
para cada palabra.

La cadena pasada solo constará de caracteres alfabéticos y espacios ( ' '). Los espacios solo estarán presentes si hay varias palabras. 
Las palabras estarán separadas por un solo espacio ( ' ').

Ejemplos:
"String" => "StRiNg"
"Weird string case" => "WeIrD StRiNg CaSe"*/

const toWeirdCase =(string) =>{
    return string.split(" ").map((item)=> item.split("").map((item, index)=> index % 2 === 0 ? item.toUpperCase() : item.toLowerCase()).join("")).join(" ")
  }


  console.log(toWeirdCase('This'));
  console.log(toWeirdCase('This is a test'));
  console.log(toWeirdCase('is'));
  
  
//   item.at(0).toUpperCase()
// index % 2 === 0 ? item.toUpperCase() : item