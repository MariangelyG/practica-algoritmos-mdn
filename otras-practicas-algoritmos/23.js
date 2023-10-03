/*¿Estás tocando el banjo?
Crea una función que responda a la pregunta "¿Estás tocando el banjo?".
Si tu nombre comienza con la letra "R" o "r" minúscula, ¡estás tocando el banjo!

La función toma un nombre como único argumento y devuelve una de las siguientes cadenas:

name + " plays banjo" 
name + " does not play banjo"*/

const areYouPlayingBanjo = (name) => {
    return name[0] === "r" || name[0] === "R" ? `${name} plays banjo` : `${name} does not play banjo`
  }

  console.log(areYouPlayingBanjo("Adam"));
  console.log(areYouPlayingBanjo("Paul"));
  console.log(areYouPlayingBanjo("Ringo"));
  console.log(areYouPlayingBanjo("bravo"));
  console.log(areYouPlayingBanjo("rolf"));
  