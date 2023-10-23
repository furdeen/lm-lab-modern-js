// Instructions can be found in const_vs_let.md

function countThePeople() {
  //const count = 0; // this is the issue , should be let count = 0;
  let count = 0;
  const people = ["Barbara", "Jacob", "Angela", "Brangela"];
  people.forEach(() => (count += 1));
  return count;
}

 console.log(countThePeople()); // <---- uncomment me!


