import { createInterface } from 'readline';
import { stdin, stdout } from 'process';
import { getCommands } from './commands.js';

export function cleanInput(input: string): string[] {
    const array = input.toLowerCase().trim().split(' ');
    return array.map(item => item.trim()).filter(item => item.length > 0);
}

export function startREPL() {
    const rl = createInterface({
        input: stdin,
        output: stdout,
        prompt: 'Pokedex > '
    });

    rl.prompt();
    rl.on('line', (line) => {
        const cleanedInput = cleanInput(line);
        if (cleanedInput.length === 0) {
            rl.prompt();
            return;
        }
        const commands = getCommands();
        const cmd = commands[cleanedInput[0]];
        if (!cmd) {
            console.log(`Unknown command: ${cleanedInput[0]}. Type "help" for a list of commands.`);
            rl.prompt();
            return;
        }

        try {
            cmd.callback(commands);
        } catch (error) {
            console.log(error);
        }


        rl.prompt();
    }); 
}