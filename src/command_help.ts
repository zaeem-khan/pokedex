import { CLICommand } from './command.js';

export function commandHelp(commands: Record<string, CLICommand>) {
    console.log("Welcome to the Pokedex!");
    console.log("Usage:\n");

    for (const commandName in commands) {
        console.log(`${commandName}: ${commands[commandName].description}`);
    }
}