import { getPokemons } from '../../config/requests';
import { LOCATIONS_API, POKEMONS_API } from '../../utils/api';
import { PokemonsRequestParams, PokemonsResponse, PokemonsDetailsResponse } from './pokemons.types';

export const getPokemonsData = ({
  limit,
  offset
}: PokemonsRequestParams): Promise<PokemonsResponse> =>
  getPokemons(POKEMONS_API, { params: { limit, offset } });

export const getLocationsData = (): Promise<PokemonsResponse> =>
  getPokemons(`${LOCATIONS_API}?offset=0&limit=1000`);

export const getPokemonsDetails = (name: string): Promise<PokemonsDetailsResponse> =>
  getPokemons(`${POKEMONS_API}/${name}`);
