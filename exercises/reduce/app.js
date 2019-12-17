// const total = [1, 2, 3, 4]

// const result = total.reduce(function(final, total){
//     final = final + total
//     return final
// })

// console.log(result)

const total = [1,2,3]

const result = total.reduce(function(final, total){
    final.push(total)
})

console.log(result)