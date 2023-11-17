import { SelectChangeEvent } from '@mui/material';
import { ChangeEvent, ReactNode } from 'react';
import { PokemonsResponse } from 'src/api/pokemons/pokemons.types';
import { LocationsTableProps } from 'src/components/LocationsTable/LocationsTable.types';

export interface UseDashboardResponse {
  page: number;
  search: string | null;
  rowsPerPage: number;
  isPokemonLoading: boolean;
  pokemonList?: PokemonsResponse;
  selectedPokemon?: string;
  isModalOpen: boolean;
  setSelectedPokemon?: (value: React.SetStateAction<LocationsTableProps | undefined>) => void;
  handleOpenModal: (name: string) => void;
  handleCloseModal: () => void;
  handleChangePage: (event: ChangeEvent<unknown>, page: number) => void;
  handleChangeRowsPerPage: (event: SelectChangeEvent<number>, child: ReactNode) => void;
  onSearchChange: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}
