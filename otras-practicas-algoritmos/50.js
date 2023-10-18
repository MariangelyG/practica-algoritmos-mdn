/*¡El mayor beneficio gana!
Historia
Ben tiene una idea muy sencilla para obtener beneficios: compra algo y lo vuelve a vender. 
Por supuesto, esto no le daría ninguna ganancia si simplemente lo comprara y lo vendiera al mismo precio. 
En cambio, lo comprará al precio más bajo posible y lo venderá al más alto.

Tarea
Escriba una función que devuelva el número mínimo y máximo de la lista/matriz dada.*/


const  minMax = (arr) => {
    return [Math.min(...arr), Math.max(...arr)]
  }

  console.log(minMax([1, 2, 3, 4, 5]));
  console.log(minMax([2334454, 5]));
  console.log(minMax([5]));
  