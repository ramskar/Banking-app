import readline from 'readline';
import { greetWithCeo, greetWithClient } from './greetWithClient.js';

const rl = readline.createInterface(
    process.stdin, process.stdout);

rl.question('Iveskite varda: ', (name) => {
    if (name == "Tadas") {
        greetWithCeo(name);
    } else {
        greetWithClient(name);
    }
});
