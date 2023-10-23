// Instructions can be found in rest_parameters.md


export function add(...numbers) {
  let sum = 0;
  numbers.forEach(number => {
    sum += number;
  });
  return sum;   
}

//add(...1,2)
//console.log(add(1,2,3,4,5));
// Add rest parameters here!
/*
export function add(a, b) {
  // Add a loop here
  return a + b;
}
*/

//add(1, 2, 3, 4, 5);
