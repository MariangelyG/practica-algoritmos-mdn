/*¡Haz una función que haga aritmética!
Dados dos números y un operador aritmético (su nombre, como una cadena), 
devuelve el resultado de los dos números que tienen ese operador utilizado en ellos.
a y b ambos serán números enteros positivos, y asiempre serán el primer número de la operación y bsiempre el segundo.
Los cuatro operadores son "suma", "resta", "división", "multiplicación".
Algunos ejemplos: (Entrada1, Entrada2, Entrada3 --> Salida)
5, 2, "add"      --> 7
5, 2, "subtract" --> 3
5, 2, "multiply" --> 10
5, 2, "divide"   --> 2.5*/

const arithmetic = (a, b, operator) =>{
  
    return operator == "add" ? a + b :
           operator == "subtract" ? a - b :
           operator == "multiply" ? a * b :
           operator == "divide" ? a / b : 0
  }

  console.log(arithmetic(1, 2, "add"));
  console.log(arithmetic(8, 2, "subtract"));
  console.log(arithmetic(5, 2, "multiply"));
  console.log(arithmetic(8, 2, "divide"));
  