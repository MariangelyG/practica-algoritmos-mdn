/*¡Elimina a los intrusos! Manipulación de bits
tarea
Se le da una cadena que representa un número en binario. Su tarea es eliminar todos los bits no establecidos en esta cadena y
 devolver el número correspondiente (después de mantener solo los '1').

En la práctica, debe implementar esta función:

function eliminateUnsetBits(number);
Ejemplos
eliminateUnsetBits("11010101010101") ->  255 (= 11111111)
eliminateUnsetBits("111") ->  7
eliminateUnsetBits("1000000") -> 1
eliminateUnsetBits("000") -> 0*/

const eliminateUnsetBits =(number)=> {
   let eliminarBits = number.replace(/[0]/g, "")
   return  eliminarBits != "" ? parseInt(eliminarBits,2) : 0
  }

  console.log(eliminateUnsetBits("11010101010101"));
  console.log(eliminateUnsetBits("111"));
  console.log(eliminateUnsetBits("1000000"));
  console.log(eliminateUnsetBits("000"));
  
  