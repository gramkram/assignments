const ask = require('readline-sync')
let isAlive = true;
let hasWon = false;
function Enemy (name, hp, ap){
   this.name = name;
   this.hp = hp;
   this.ap = ap;
}
const Joker = new Enemy('The Joker', 53, 20)
const Harley = new Enemy('Harley Quinn', 100, 15)
const Lex = new Enemy('Lex Luthor', 425, 6)
const Bane = new Enemy('Bane', 400, 14)
const enemies = [Joker, Harley, Lex, Bane]
var special = ['leads', 'evidence', 'bat o rang']
var inventory = []
// inventory.push(special[Math.floor(Math.random()*special.length)])
//        console.log(inventory)
function Hero (name, hp, ap){
   this.name = name;
   this.hp = hp;
   this.ap = ap;
}
const hero = new Hero('Batman', 500, 20)
console.log('Hello how are you, welcome to your doom')
const name = ask.question('What is your name? ')
console.log(`Welcome Gotham City ${name}, ready to fight some crime?`)
while(isAlive && !hasWon){
   let choice = ask.keyIn('Would you like to (w) Look for crime, (i) Check Inventory, or (q) Leave Game? ', {limit: 'wiq'} )
   if(choice === 'w'){
       walk()
   }else if (choice === 'i'){
      printInventory()
   }else {
       isAlive = false
       console.log('You quit the game')
   }
}

function walk (){
   let random = Math.floor(Math.random()*4) //math.floor turns dec. into whole numbers
   if(random === 3){
       enemyEncounter()
   }else{
       console.log('You continue looking for crime')
   }
}
function enemyEncounter(){
   const currEnemy = selectEnemy()
   let choice = ask.keyIn(`You encountered ${currEnemy.name}! Would you like to [a] Attack, [r] fly-away, or [q] Quit`, {limit: 'arq'})
   if(choice === 'a'){
       fight(currEnemy)
   }else if (choice === 'r'){
       run(currEnemy)
   }else {
       isAlive = false
       console.log('you quit')
   }
}
function selectEnemy(){
   let random = Math.floor(Math.random()*enemies.length) //makes random enemy
   return enemies[random]
}
function fight(currEnemy){
    while(hero.hp > 0 && currEnemy.hp > 0){
        let attack = Math.floor(Math.random()*20) + 5;
        currEnemy.hp -= attack
        console.log (`${currEnemy.name} has ${currEnemy.hp} health`)
        let attack2 = Math.floor(Math.random()*20) + 5;
        hero.hp -= attack2
        console.log (`you have ${hero.hp} health`)   
    }
    if(hero.hp > 0){
        console.log(`You killed ${currEnemy.name}!!`)
        hero.hp += 125
        console.log(`Your new HP is ${hero.hp}`)
        inventory.push(special[Math.floor(Math.random()*special.length)])
        console.log(inventory)
        for(var i = 0; i < enemies.length; i++)
            if (enemies[i] === currEnemy){
                enemies.splice(i, 1)
            }
            if (enemies.length === 0){
                hasWon === true
                console.log('congrats! Gotham is a better place now')
            }
            
    }else{
        isAlive = false
        console.log(`You have been killed by ${currEnemy.name}!`)
    }
 
 
}
function run(currEnemy){
    gotAway = false
    let runAway = Math.floor(Math.random() * 2)
    if (runAway === 0){
        console.log('You flew away safely')
        gotAway = true;
    } else if (runAway === 1){
        fight(currEnemy)
    }    

}

function printInventory(){
    console.log(inventory)
}


