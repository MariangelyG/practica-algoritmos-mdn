/*
Sigue con el aro
Alex acaba de recibir un nuevo hula-hoop. Le encanta pero se siente desanimado porque su hermano pequeño es mejor que él.
Escribe un programa donde Alex pueda ingresar (n) cuántas veces gira el aro y le devolverá un mensaje alentador :)
Si Alex consigue 10 o más aros, devuelve la cadena "Genial, ahora pasa a los trucos".
Si no consigue 10 aros, devuelve la cadena "Sigue así hasta que lo consigas".*/

const hoopCount = (n)=> {
    return n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it"
 }

 console.log(hoopCount(3));
 console.log(hoopCount(11));
 