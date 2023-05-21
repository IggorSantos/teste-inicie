export interface Pokemon {
    abilities: Array<Object>,
    base_experience: number,
    forms: Array<Object>,
    game_indices: Array<Object>,
    height: number,
    held_items: Array<Object>,
    id: number;
    is_default: boolean,
    location_area_encounters: string,
    moves: Array<Object>,
    name: string,
    order: number,
    past_types: Array<Object>,
    species: {
        name: string,
        url: string
    },
    sprites: {
        back_default?: string,
        back_female?: string,
        back_shiny?: string,
        back_shiny_female?: string,
        front_default?: string;
        front_default_female?: string,
        front_shiny?: string;
        front_shiny_female?: string,
    }
    stats: Array<Object>,
    types: Array<Object>,
    weight: number


}