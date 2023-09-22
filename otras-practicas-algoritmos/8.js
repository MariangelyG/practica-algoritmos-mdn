// Encuentra mínimo y máximo
// Implemente una función que devuelva el valor mínimo y máximo de una lista (en este orden).


const getMinMax = (arr) => {
    return [Math.min(...arr), Math.max(...arr)]
  };

  console.log(getMinMax([1]));
  console.log(getMinMax([1,2]));
  console.log(getMinMax([2,1]));
  
  
  