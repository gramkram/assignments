const readline = require("readline-sync")
let alive = true
let hasKey = false

const name = readline.question('welcome to the escape room, may i have your name?')


while(alive === true){
    const choice = readline.keyIn(`${name}, would you like to [a] Put your hand in the hole, [b] Find the key, or [c] Open the door`, {limit: 'abc'} )
        if(choice === 'a'){
            console.log('there is no shortcuts in life now you are dead')
            process.exit()
        } else if(choice === 'b'){
            hasKey = true
            console.log('you found the key!')
        } else if(choice === 'c'){
            if (hasKey === true){
                console.log('you escaped the impossible')
            } else if (hasKey === false) {
                console.log('you need the key')
            }
        }
}