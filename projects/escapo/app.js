const readline = require("readline-sync")

let isAlive = true
let hasKey = false

const name = readline.question('welcome to escape room, may in have your name?')

while(isAlive === true){
    const choice = readline.keyIn(`${name}, would you like to [a]put hand in hole, [b]find the key, [c]open the door` {limit: 'abc'})
        if(choice === 'a'){
            console.log('there is no shortcuts in life....you are dead')
            process.exit
        }
}