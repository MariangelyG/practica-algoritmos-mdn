const flatten = (arr) => {
 return arr.flat(5).filter((item)=> item != null)
};

console.log(flatten([])) //toEqual([]);
console.log(flatten([0, 1, 2])) //toEqual([0, 1, 2]);
console.log(flatten([[]])) //toEqual([]);
console.log(flatten([1, [2, 3, 4, 5, 6, 7], 8])) //toEqual([1, 2, 3, 4, 5, 6, 7, 8, ]);
console.log(flatten([0, 2, [[2, 3], 8, 100, 4, [[[50]]]], -2])) //toEqual([ 0, 2, 2, 3, 8, 100, 4, 50, -2, ]);
console.log(flatten([1, [2, [[3]], [4, [[5]]], 6, 7], 8])) //toEqual([1, 2, 3, 4, 5, 6, 7, 8,]);
console.log(flatten([1, 2, undefined])) //toEqual([1, 2]);
console.log(flatten([1, 2, null])) //toEqual([1, 2]);
console.log(flatten([0, 2, [[2, 3], 8, [[100]], null, [[null]]], -2])) //toEqual([0, 2, 2, 3, 8, 100, -2,]);
console.log(flatten([null, [[[null]]], null, null, [[null, null], null], null]))//toEqual([]);
