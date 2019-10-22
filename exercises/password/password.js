function randomPassword (passlength) {
const password = [];
let randChar; 
for (let i = 0; i < passlength; i++) {
    randChar = String.fromCharCode(Math,round(
    (Math.random() * 94) + 32));
    password.push(randChar)
}
return password.join("");
}
randomPassword(10);