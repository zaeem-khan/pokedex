import { State } from './state.js';

export function cleanInput(input: string): string[] {
    const array = input.toLowerCase().trim().split(' ');
    return array.map(item => item.trim()).filter(item => item.length > 0);
}

export function startREPL(state: State) {
    state.readline.prompt();

    state.readline.on('line', async (line) => {
        const cleanedInput = cleanInput(line);
        if (cleanedInput.length === 0) {
            state.readline.prompt();
            return;
        }
        const cmd = state.commands[cleanedInput[0]];
        if (!cmd) {
            console.log(`Unknown command: ${cleanedInput[0]}. Type "help" for a list of commands.`);
            state.readline.prompt();
            return;
        }

        try {
            cmd.callback(state);
        } catch (error) {
            console.log(error);
        }
        
        state.readline.prompt();
    }); 
}