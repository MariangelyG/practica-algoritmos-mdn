/*Prueba 1-2-3
Su equipo está escribiendo un nuevo editor de texto elegante y a usted se le ha asignado la tarea de implementar 
la numeración de líneas.
Escriba una función que tome una lista de cadenas y devuelva cada línea precedida por el número correcto.
La numeración comienza en 1. El formato es n: string. Observe los dos puntos y el espacio entre ellos.

Ejemplos: (Entrada --> Salida)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]*/

const number=(array)=>{
    
    return array.map((item, index)=> `${index+1}: ${item}`)
  }

  console.log(number(["a", "b", "c"]));
  