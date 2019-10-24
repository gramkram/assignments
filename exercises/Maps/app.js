// function doubleNumbers(arr){
//     return arr.map((num) =>{
//      return num*2 
// })
// }
// console.log(doubleNumbers([2, 5, 100]));

// function capitalizeNames(people){
//   return people.map((person) => {
//     return person[0].toUpperCase() + person.slice(1).toLowerCase()
//   })
//  }
  
//   console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]))

// function namesOnly(arr){
//   return arr.map((name) => {
//     return name.name.toString()
//   })
// }
// console.log(namesOnly([
//   {
//       name: "Angelina Jolie",
//       age: 80
//   },
//   {
//       name: "Eric Jones",
//       age: 2
//   },
//   {
//       name: "Paris Hilton",
//       age: 5
//   },
//   {
//       name: "Kayne West",
//       age: 16
//   },
//   {
//       name: "Bob Ziroll",
//       age: 100
//   }
// ]));

function makeStrings(arr){
  return arr.map((person) => {
    if (person.age >= 18) {
      return `${person.name} can see the movie`
    } else {
      return `${person.name} cant see the movie`
    }
  })
  }
console.log(makeStrings([
  {
      name: "Angelina Jolie",
      age: 80
  },
  {
      name: "Eric Jones",
      age: 2
  },
  {
      name: "Paris Hilton",
      age: 5
  },
  {
      name: "Kayne West",
      age: 16
  },
  {
      name: "Bob Ziroll",
      age: 100
  }
])); 

