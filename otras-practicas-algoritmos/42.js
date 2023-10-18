/*Un lobo con piel de oveja
Los lobos han sido reintroducidos en Gran Bretaña. Eres un criador de ovejas y ahora estás plagado 
de lobos que se hacen pasar por ovejas. Afortunadamente, eres bueno detectándolos.

Advierte a la oveja delante del lobo que está a punto de ser comida. Recuerde que está parado al 
frente de la cola que está al final de la matriz:

[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
   7      6      5      4      3            2      1
Si el lobo es el animal más cercano a ti, regresa "Pls go away and stop eating my sheep". 
De lo contrario, regrese "Oi! Sheep number N! You are about to be eaten by a wolf!"donde N
está la posición de la oveja en la cola.*/

const warnTheSheep = (queue)=> {
    let invertir = queue.reverse().findIndex((item)=> item === "wolf") 
    return invertir === 0 ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${invertir}! You are about to be eaten by a wolf!`
}

console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]));
console.log(warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]));
console.log(warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]));
console.log(warnTheSheep(["sheep", "wolf", "sheep"]));
console.log(warnTheSheep(["sheep", "sheep", "wolf"]));


