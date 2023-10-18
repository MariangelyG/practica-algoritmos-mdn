/*Capitalización alternativa
Dada una cadena, escriba en mayúscula las letras que ocupan índices pares e índices impares 
por separado y regrese como se muestra a continuación. El índice 0se considerará par.

Por ejemplo, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. Consulte los casos de prueba para obtener más ejemplos.

La entrada será una cadena en minúsculas sin espacios.*/


const capitalize = (s) =>{
    let indicePar= s.split("").map((item, index)=> index % 2 === 0 ? item.toUpperCase() : item.toLowerCase()).join("")
    let indiceImpar = s.split("").map((item, index)=> index % 2 !== 0 ? item.toUpperCase() : item.toLowerCase()).join("")
    return [indicePar, indiceImpar]
  };


  console.log(capitalize("abcdef"));
  console.log(capitalize("codewars"));
  console.log(capitalize("abracadabra"));
  console.log(capitalize("codewarriors"));
  