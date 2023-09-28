/*Saltamontes - Verifique el factor
Esta función debe probar si factores un factor de base
Devuelve truesi es un factor o falsesi no lo es.
Acerca de los factores
Los factores son números que puedes multiplicar para obtener otro número.
2 y 3 son factores de 6 porque:2 * 3 = 6
Puedes encontrar un factor dividiendo números. Si el resto es 0 entonces el número es un factor.
Puede utilizar el operador mod ( %) en la mayoría de los idiomas para comprobar si hay un resto
Por ejemplo, 2 no es factor de 7 porque:7 % 2 = 1
Nota: basees un número no negativo, factores un número positivo.*/

const checkForFactor = (base, factor) => {
  return base % factor === 0
}

console.log(checkForFactor(10,2));
console.log(checkForFactor(9,2));

