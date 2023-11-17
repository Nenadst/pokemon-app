import { MouseEvent, ChangeEvent } from 'react';
import { PokemonsResponse } from 'src/api/pokemons/pokemons.types';

export interface LocationsTableProps {
  page: number;
  rowsPerPage: number;
  handleChangePage: (event: MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
  handleChangeRowsPerPage: (event: ChangeEvent<HTMLInputElement>) => void;
  locationsData: PokemonsResponse | undefined;
  isLocationLoading: boolean;
}
