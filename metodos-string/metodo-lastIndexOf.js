/*Método `lastIndexOf`:
Enunciado: Escribe una función que tome una cadena y un valor de búsqueda como entrada, 
y use el método `lastIndexOf` para encontrar la última aparición del valor de búsqueda en la cadena.
Entrada: Una cadena de texto y otra cadena de texto que representa el valor de búsqueda.
Salida: El índice de la última aparición del valor de búsqueda en la cadena o -1 si no se encuentra.

Ejemplo:
Entrada: lastIndexOf("hello world hello", "hello")
Salida: 12*/


    const lastIndexOf = (str, vBusqueda) => {
        return str.lastIndexOf(vBusqueda)
    }

    console.log(lastIndexOf("hello world hello", "hello"));
    console.log(lastIndexOf("Word word hello world hello", "world"));


