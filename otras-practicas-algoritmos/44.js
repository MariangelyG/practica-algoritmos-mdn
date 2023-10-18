
/*Serie de signos de exclamación n.° 11: reemplace todas las vocales por signos de exclamación en la oración
Reemplace todas las vocales por signos de exclamación en la oración. aeiouAEIOUes vocal.*/

const replace = (s) => {
    return s.replace(/[aeiou]/gi, "!")
  }

  console.log(replace("Hi!"));
  console.log(replace("!Hi! Hi!"));
  console.log(replace("aeiou"));
  console.log(replace("ABCDE"));
 
  