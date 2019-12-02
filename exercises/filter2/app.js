// function fiveAndGreaterOnly(arr){
//     return arr.filter((num) => {
//         if (num > 5){
//             return num
//         }
//     })
// }
// console.log(fiveAndGreaterOnly([3, 6, 8, 2]));


// function evensOnly(arr) {
//     return arr.filter((num) => {
//         if (num % 2 === 0){
//             return num
//         }
//     })
//   }
// console.log(evensOnly([3, 6, 8, 2]));


// function fiveCharactersOrFewerOnly(arr) {
//     return arr.filter ((str) => {
//         if (str.length <= 5){
//             return str
//         }
//     })
//   }
//   console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"]));


function peopleWhoBelongToTheIlluminati(arr){
    return arr.filter ((member) => {
        if (peopleWhoBelongToTheIlluminati.member === true){
            return peopleWhoBelongToTheIlluminati
        }
    })
  }

  console.log(peopleWhoBelongToTheIlluminati([
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]));