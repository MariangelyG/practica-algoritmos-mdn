// Determinar el sexo de la descendencia según los genes de los cromosomas XX y XY.
// Determine si el sexo de la descendencia será masculino o femenino según el cromosoma X o Y presente en 
// el esperma del macho.

// Si el espermatozoide contiene el cromosoma X, responda "¡Felicitaciones! Vas a tener una hija.";
// Si el espermatozoide contiene el cromosoma Y, responda "¡Felicitaciones! Vas a tener un hijo.";

const chromosomeCheck = (sperm)=> {
  return sperm === 'XY' ? "Congratulations! You're going to have a son." 
                        : "Congratulations! You're going to have a daughter."
}

console.log(chromosomeCheck('XY'));
console.log(chromosomeCheck('XX'));
