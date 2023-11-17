export interface Pokemons {
  name: string;
  url: string;
}

export interface PokemonsResponse {
  count: number;
  next: string;
  previous: string;
  results: Pokemons[];
}

export interface PokemonsRequestParams {
  limit: number;
  offset: number;
}

export interface PokemonsDetailsResponse {
  id: number;
  name: string;
  sprites: Sprite;
  abilities: Ability[];
  types: Type[];
  game_indices?: GameIndex[];
  moves?: Move[];
  stats?: Stat[];
}

interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
  };
}

interface Move {
  move: {
    name: string;
  };
}

interface GameIndex {
  game_index: number;
  version: {
    name: string;
  };
}

interface Sprite {
  front_default: string;
}

interface Ability {
  ability: {
    name: string;
  };
}

interface Type {
  type: {
    name: string;
  };
}
