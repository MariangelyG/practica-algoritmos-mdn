/*Cuadrar cada dígito
Bienvenido. En este kata, se te pide elevar al cuadrado cada dígito de un número y concatenarlos.
Por ejemplo, si ejecutamos 9119 a través de la función, saldrá 811181, porque 9 2 es 81 y 1 2 es 1. (81-1-1-81)
Ejemplo #2: Una entrada de 765 devolverá/debería devolver 493625 porque 7 2 es 49, 6 2 es 36 y 5 2 es 25. (49-36-25)
Nota: La función acepta un número entero y devuelve un número entero.*/

const squareDigits = (num) => {
    return +num.toString().split("").map((item, index)=> item * item).join("")
  }

  console.log(squareDigits(3212));
  console.log(squareDigits(2112));
  console.log(squareDigits(0));
  