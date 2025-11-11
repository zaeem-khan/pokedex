import { State } from './state.js';

export function cleanInput(input: string): string[] {
    const array = input.toLowerCase().trim().split(' ');
    return array.map(item => item.trim()).filter(item => item.length > 0);
}

export async function startREPL(state: State) {
    state.readline.prompt();

    state.readline.on('line', async (line) => {
        const cleanedInput = cleanInput(line);
        if (cleanedInput.length === 0) {
            state.readline.prompt();
            return;
        }

        const commandName = cleanedInput[0];
        const args = cleanedInput.slice(1);

        const cmd = state.commands[commandName];
        if (!cmd) {
            console.log(`Unknown command: ${commandName}. Type "help" for a list of commands.`);
            state.readline.prompt();
            return;
        }

        try {
            await cmd.callback(state, ...args);
        } catch (error) {
            console.log((error as Error).message);
        }
        
        state.readline.prompt();
    }); 
}