import { commandCatch } from './command_catch.js';
import { commandExit } from './command_exit.js';
import { commandExplore } from './command_explore.js';
import { commandHelp } from './command_help.js';
import { commandMapForward, commandMapBack } from './command_map.js';

import { CLICommand } from './state.js';

export function getCommands(): Record<string, CLICommand> {
    return {
        exit: {
            name: "exit",
            description: "Exit the pokedex",
            callback: commandExit,
        },
        help: {
            name: "help",
            description: "Displays a help message",
            callback: commandHelp,
        },
        map: {
            name: "map",
            description: "Get next page of locations",
            callback: commandMapForward
        },
        mapb: {
            name: "mapb",
            description: "Get previous page of locations",
            callback: commandMapBack
        },
        explore: {
            name: "explore <location-name>",
            description: "Explore a location",
            callback: commandExplore
        },
        catch: {
            name: "catch <pokemon-name>",
            description: "Attempt to catch a pokemon",
            callback: commandCatch,
        },
    }
}