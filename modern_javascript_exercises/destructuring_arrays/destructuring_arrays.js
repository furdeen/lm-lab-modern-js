// Instructions can be found in destructuring_arrays.md

/*
export function sequence(order) {
  const first = order[0];
  const second = order[1];
  const third = order[2];

  return first + ", " + second + ", " + third;
}
console.log(sequence(["a", "b", "c"]));
*/

export function sequence(order) {
[first, second, third] = order;
return first + ", " + second + ", " + third;
}
console.log(sequence(["a", "b", "c"]));

/*can i do this as well*/

//export const sequence = (order) => {
  //const [first, second, third] = order;
//}
//console.log(sequence(["a", "b", "c"]));

/* i think not*/ 
