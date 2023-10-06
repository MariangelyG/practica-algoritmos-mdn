// Entrenamiento JS #4: Tipos de datos básicos - Matriz

//return length of arr
    const getLength = (arr) => arr.length

 //return the first element of arr
    const getFirst = (arr) => arr[0]

 //return the last element of arr 
    const getLast = (arr) => arr[arr.length-1]

  //push el to arr 
    const pushElement =(arr) => {
        arr.push(4)
        return arr
}

//pop an element from arr
    const popElement = (arr) => {
        arr.pop()
        return arr
}


  console.log(getLength([1,2,3]));
  console.log(getFirst([1,2,3]));
  console.log(getLast([1,2,3]));
  console.log(pushElement([1,2,3]));
  console.log(popElement([1,2,3]));
  
  
  
  
  