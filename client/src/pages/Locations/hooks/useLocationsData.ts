import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { Cache } from 'src/config/cache';
import { type PokemonsResponse } from 'src/api/pokemons/pokemons.types';
import { getLocationsData } from 'src/api/pokemons/pokemonsApi';

export const useLocationsData = (): UseQueryResult<PokemonsResponse, Error> =>
  useQuery<PokemonsResponse, Error>([Cache.LOCATIONS], () => getLocationsData());
