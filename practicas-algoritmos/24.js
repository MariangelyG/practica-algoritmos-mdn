/*
Tarjeta de crédito Mascarilla
Por lo general, cuando compra algo, se le pregunta si su número de tarjeta de crédito, 
número de teléfono o la respuesta a su pregunta más secreta sigue siendo correcta. 
Sin embargo, dado que alguien podría mirar por encima de su hombro, no desea que eso se muestre en su pantalla.
 En cambio, lo enmascaramos.

Su tarea es escribir una función maskifyque cambie todos los caracteres excepto los últimos cuatro a '#'.

Ejemplos (entrada --> salida):
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"
"Skippy" --> "##ippy"
"Nananananananananananananananana Batman!" --> "####################################man!"*/

const maskify= (cc)=> {
  let extraer = cc.slice(0,-4)
  let end = cc.slice(-4)
 return extraer.replace(/./g, "#") + end
}

console.log(maskify('4556364607935616'));
console.log(maskify('1'));
console.log(maskify('11111'));


