/*Invertir palabras en una cadena
Necesita escribir una función que invierta las palabras en una cadena determinada. 
Una palabra también puede caber en una cadena vacía. Si esto no queda lo suficientemente claro, 
aquí hay algunos ejemplos:

Como la entrada puede tener espacios finales, también deberá ignorar los espacios en blanco innecesarios.

Ejemplo ( Entrada --> Salida )

"Hello World" --> "World Hello*/

const reverse = (string) => {
    return string.split(" ").reverse().join(" ")
  }

  console.log(reverse('I am an expert at this'));
  console.log(reverse('This is so easy'));
  console.log(reverse('no one cares'));
  console.log(reverse('CodeWars'));
  
  