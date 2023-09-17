/*Miedo selectivo a los números.
Tengo una enfermedad mental loca. Me desagradan mucho los números. Pero es un poco complicado: 
El número al que le tengo miedo depende del día de la semana que sea... Esta es una descripción concreta de mi enfermedad mental:

lunes --> 12

Martes --> números mayores de 95

miércoles --> 34

jueves --> 0

viernes --> números divisibles por 2

Sábado --> 56

Domingo --> 666 o -666

Escriba una función que tome una cadena (día de la semana) y un número entero (número a analizar) para que le diga al médico si tengo miedo o no.
 (devuelve un booleano)*/

const AmIAfraid = (day, num) => {
    if (day === 'Monday' && num === 12) {
        return true
      } else if (day === 'Tuesday' && num > 95) {
        return true;
      } else if (day === 'Wednesday' && num === 34) {
        return true;
      } else if (day === 'Thursday' && num === 0) {
        return true;
      } else if (day === 'Friday' && num % 2 === 0) {
        return true;
      } else if (day === 'Saturday' && num === 56) {
        return true;
      } else if (day === 'Sunday' && ((num === -666) || (num === 666))) {
        return true;
      }
      return false;
    }

  console.log(AmIAfraid("Monday", 13));
  console.log(AmIAfraid("Sunday", -666));
  console.log(AmIAfraid("Tuesday", 2));
  console.log(AmIAfraid("Tuesday", 965));
  console.log(AmIAfraid("Friday", 2));
  
  
  
  
  