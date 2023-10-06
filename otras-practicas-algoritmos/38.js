/*Formar el mínimo
Dada una lista de dígitos , devuelve el número más pequeño que podría formarse a partir de estos dígitos, 
usando los dígitos solo una vez (ignore los duplicados).*/

const minValue = (values) =>{
    return +[...new Set (values)].sort((a,b)=> a-b).join("")
  }

  console.log(minValue([1, 3, 1]));
  console.log(minValue([4, 7, 5, 7]));
  console.log(minValue([4, 8, 1, 4]));
  console.log(minValue([5, 7, 9, 5, 7]));
  console.log(minValue([6, 7, 8, 7, 6, 6]));
  console.log(minValue([5, 6, 9, 9, 7, 6, 4]));
  console.log(minValue([1, 9, 1, 3, 7, 4, 6, 6, 7]));
  console.log(minValue([3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9]));
  console.log(minValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
  
  