var readline = require('readline');
var rl = readline.createInterface(
    process.stdin, process.stdout);

rl.question('Iveskite varda: ', (name) => {
    console.log('Sveiki, ' + name +"!");
});