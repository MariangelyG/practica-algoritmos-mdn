// Agrupados por comas
// Termine la solución para que tome una entrada n(entero) y devuelva una cadena que sea la representación 
// decimal del número agrupado por comas después de cada 3 dígitos.

const groupByCommas = (n)=> {
  return n.toLocaleString() 
}


console.log(groupByCommas(1));
console.log(groupByCommas(12));
console.log(groupByCommas(123));
console.log(groupByCommas(1234));
console.log(groupByCommas(12345));
console.log(groupByCommas(123456));
console.log(groupByCommas(1234567))
console.log(groupByCommas(12345678))
console.log(groupByCommas(123456789))

