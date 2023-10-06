/*¡Enciéndelo!
Cuando se le proporcione un número entre 0 y 9, devuélvalo en palabras.

Entrada :: 1

Salida :: "Uno".*/


const switchItUp = (number) => {
    return number === 1 ? "One" : 
           number === 2 ? "Two" :
           number === 3 ? "Three" :
           number === 4 ? "Four" :
           number === 5 ? "Five" :
           number === 6 ? "Six" :
           number === 7 ? "Seven" : 
           number === 8 ? "Eight" :
           number === 9 ? "Nine" : "Zero"
    }

    console.log(switchItUp(1));
    console.log(switchItUp(3));
    console.log(switchItUp(5));
    
    
    