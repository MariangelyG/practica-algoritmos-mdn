/*Pensativo - Ejercicios de Lógica: Semáforo
Estás escribiendo código para controlar los semáforos de tu ciudad. 
Necesita una función para manejar cada cambio de green, a yellow, a redy luego a greennuevamente.
Complete la función que toma una cadena como argumento que representa el estado actual de la luz 
y devuelve una cadena que representa el estado al que debe cambiar la luz.

Por ejemplo, cuando la entrada es green, la salida debería ser yellow.*/

const updateLight = (current)=> {
  
    if(current === "green"){
        return "yellow"
    }else if(current === "yellow"){
        return "red"
    }else if(current === "red"){
        return "green"
    }
  
  }

  console.log(updateLight("green"));
  console.log(updateLight("yellow"));
  console.log(updateLight("red"));
  