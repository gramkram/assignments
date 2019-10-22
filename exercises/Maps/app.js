// function doubleNumbers(arr){
//     return arr.map((num) =>{
//      return num*2 
// })
// }
// console.log(doubleNumbers([2, 5, 100]));

function capitalizeNames(arr){
    return arr.charAt(0).toUperCase() + arr.slice(1);
  }
  
  console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]))