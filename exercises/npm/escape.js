const readline = require("readline-sync")

const name = readline.question('May i Have your name? ')
console.log('Welcome ' + name + '!')
choices()
function choices (){
   let choice = readline.keyIn('Would you like to (a) search the floor, (b) search the holes in the wall, or (q) Quit' , {limit:'a b q'})
        if(choice === 'a'){
            floorSearch()
        } else if (choice === 'b'){
            holeSearch()
        } else if (choice === 'q'){
            console.log('you quit')
        } else {
            console.log('game over')
     }
 }
function floorSearch(){
    let random = Math.floor(Math.random()*6)
    if(random === 3){
        console.log('you found the key and won')
    } else {
        choices()
    }
}

function holeSearch(){
    console.log('you lost get good')
}

