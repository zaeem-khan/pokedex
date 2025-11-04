import type { State } from './state.js';

export async function commandMapForward(state: State) {
    const locations = await state.pokeAPI.fetchLocations(state.nextLocationsURL);

    state.nextLocationsURL = locations.next;
    state.previousLocationsURL = locations.previous;
    for (const loc of locations.results) {
        console.log(loc.name);
    }
}

export async function commandMapBack(state: State) {
    if (!state.previousLocationsURL) {
        throw new Error("you're on the first page");
    }

    const locations = await state.pokeAPI.fetchLocations(state.previousLocationsURL);
    
    state.nextLocationsURL = locations.next;
    state.previousLocationsURL = locations.previous;
    for (const loc of locations.results) {
        console.log(loc.name);
    }
}