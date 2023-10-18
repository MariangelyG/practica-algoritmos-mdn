/*Hexadecimal a decimal
Complete la función que convierte un número hexadecimal (dado como una cadena) en un número decimal.*/

const hexToDec =(hexString) => {
    return parseInt(hexString, 16)
  }

  console.log(hexToDec("1"));
  console.log(hexToDec("a"));
  console.log(hexToDec("10"));
  console.log(hexToDec("FF"));
  console.log(hexToDec("-C"));
  