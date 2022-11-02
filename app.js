import readline from "readline";
import greetWithClient from "./greetWithClient.js";

const rl = readline.createInterface(process.stdin, process.stdout);

rl.question("Iveskite varda: ", (name) => {
  greetWithClient(name);
});
