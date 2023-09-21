// FIXME: Reemplazar todos los puntos
// Se supone que el código proporcionado reemplaza todos los puntos .en la cadena especificada strcon guiones-
// Pero no funciona correctamente.
// Tarea
// Corrija el error para que todos podamos irnos a casa temprano.
// Notas
// La cadena strnunca será nula.

const replaceDots = (str) => {
    return str.replace(/[.]/g, '-');
  }

  console.log(replaceDots("one.two.three"));
   
//   return str.split('.').join('-')