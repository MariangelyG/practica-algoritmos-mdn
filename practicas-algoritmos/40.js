/*Dos numeros son positivos
Su trabajo es escribir una función que tome tres números enteros a, by ccomo argumentos, 
y devuelva Truesi exactamente dos de los tres números enteros son números positivos (mayores que cero) y False- de lo contrario.
Ejemplos:
twoArePositive(2, 4, -3) == true
twoArePositive(-4, 6, 8) == true
twoArePositive(4, -6, 9) == true
twoArePositive(-4, 6, 0) == false
twoArePositive(4, 6, 10) == false
twoArePositive(-14, -3, -4) == false*/

    const twoArePositive = (a, b, c)=> {
        return (a>0) + (b>0) + (c>0) == 2
    } 

console.log(twoArePositive(2, 4, -3));
console.log(twoArePositive(-4, 6, 8));
console.log(twoArePositive(4, -6, 9));
console.log(twoArePositive(-4, 6, 0));
console.log(twoArePositive(-14, -3, -4));
console.log(twoArePositive(4, 6, 10));


