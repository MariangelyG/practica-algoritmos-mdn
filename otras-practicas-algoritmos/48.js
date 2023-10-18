/*regresar el dia
Complete la función que devuelve el día de la semana según el número ingresado:

1devoluciones"Sunday"
2devoluciones"Monday"
3devoluciones"Tuesday"
4devoluciones"Wednesday"
5devoluciones"Thursday"
6devoluciones"Friday"
7devoluciones"Saturday"
De lo contrario regresa"Wrong, please enter a number between 1 and 7"*/

const whatday = (num) => { 
    return num === 1 ? "Sunday" :
           num === 2 ? "Monday" :
           num === 3 ? "Tuesday" :
           num === 4 ? "Wednesday" :
           num === 5 ? "Thursday" :
           num === 6 ? "Friday" :
           num === 7 ? "Saturday" :  "Wrong, please enter a number between 1 and 7" 
  }
  
  console.log(whatday(1));
  console.log(whatday(2));
  console.log(whatday(3));
  console.log(whatday(4));
  console.log(whatday(5));
  console.log(whatday(6));
  console.log(whatday(7));
  console.log(whatday(8));