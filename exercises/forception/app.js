var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"
var empty = []

function forception(people, alphabet){
    for(var i = 0; i < people.length; i++) {
        empty.push(`${people[i]};`)
        for(var j = 0; j < alphabet.length; j++){
        }
    }  
    reutrn empty
}
console.log(forception(people, alphabet))