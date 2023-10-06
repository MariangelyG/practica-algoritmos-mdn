/*Grasshopper: función de combate del juego terminal
Crea una función de combate que tome la salud actual del jugador y la cantidad de daño recibido,
y le devuelva la nueva salud. La salud no puede ser inferior a 0 .*/


const combat = (health, damage) => {
    return health > damage ? health - damage : 0
  }

  console.log(combat(100, 5));
  console.log(combat(92, 8));
  console.log(combat(20, 30));
  