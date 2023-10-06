/*Orden descendiente
Su tarea es crear una función que pueda tomar cualquier número entero no negativo como 
argumento y devolverlo con sus dígitos en orden descendente. Básicamente, reorganice 
los dígitos para crear el número más alto posible.

Ejemplos:
Entrada: 42145 Salida:54421

Entrada: 145263 Salida:654321

Entrada: 123456789 Salida:987654321*/

const descendingOrder = (n) =>{
   return Number (n.toString().split("").sort((a,b)=> b-a).join(""))
  }

  console.log(descendingOrder(0));
  console.log(descendingOrder(1));
  console.log(descendingOrder(111));
  console.log(descendingOrder(15));
  console.log(descendingOrder(1021));
  console.log(descendingOrder(123456789));
  