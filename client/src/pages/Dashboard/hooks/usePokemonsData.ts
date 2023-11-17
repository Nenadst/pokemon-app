import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { Cache } from 'src/config/cache';
import { PokemonsRequestParams, type PokemonsResponse } from 'src/api/pokemons/pokemons.types';
import { getPokemonsData } from 'src/api/pokemons/pokemonsApi';

export const usePokemonsData = ({
  limit,
  offset
}: PokemonsRequestParams): UseQueryResult<PokemonsResponse, Error> =>
  useQuery<PokemonsResponse, Error>([Cache.POKEMONS, limit, offset], () =>
    getPokemonsData({ limit, offset })
  );
