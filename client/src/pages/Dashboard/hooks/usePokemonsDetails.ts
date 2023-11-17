import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { Cache } from 'src/config/cache';
import { type PokemonsDetailsResponse } from 'src/api/pokemons/pokemons.types';
import { getPokemonsDetails } from 'src/api/pokemons/pokemonsApi';

export const usePokemonsDetails = (
  name: string | undefined
): UseQueryResult<PokemonsDetailsResponse, Error> =>
  useQuery<PokemonsDetailsResponse, Error>([Cache.POKEMON_DETAILS, name], () =>
    getPokemonsDetails(name as string)
  );
