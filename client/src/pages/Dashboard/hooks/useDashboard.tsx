import { useState, ChangeEvent } from 'react';
import { SelectChangeEvent } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { usePokemonsData } from './usePokemonsData';
import { UseDashboardResponse } from '../Dashboard.types';

export const useDashboard = (): UseDashboardResponse => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const search = searchParams.get('search') ? searchParams.get('search') : '';
  const page = searchParams.get('page') ? Number(searchParams.get('page')) : 0;
  const rowsPerPage = searchParams.get('rowsPerPage')
    ? Number(searchParams.get('rowsPerPage'))
    : 10;

  const [selectedPokemon, setSelectedPokemon] = useState('');

  const { data: pokemonList, isLoading: isPokemonLoading } = usePokemonsData({
    limit: rowsPerPage,
    offset: page * rowsPerPage
  });

  const handleOpenModal = (name: string) => {
    setIsModalOpen(true);
    setSelectedPokemon(name);
  };

  const handleCloseModal = () => setIsModalOpen(false);

  const handleChangePage = (event: ChangeEvent<unknown>, newPage: number) => {
    if (!event?.currentTarget) return;

    setSearchParams({
      page: newPage.toString(),
      search: search || '',
      rowsPerPage: rowsPerPage.toString()
    });
  };

  const handleChangeRowsPerPage = (event: SelectChangeEvent<number>) => {
    if (!event?.target?.value) return;

    setSearchParams({
      page: page.toString(),
      search: search || '',
      rowsPerPage: event.target.value.toString()
    });
  };

  const onSearchChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setSearchParams({
      page: page.toString(),
      rowsPerPage: rowsPerPage.toString(),
      search: event.target.value.toString()
    });
  };

  return {
    page,
    search,
    isModalOpen,
    rowsPerPage,
    isPokemonLoading,
    pokemonList,
    selectedPokemon,
    handleOpenModal,
    handleCloseModal,
    handleChangePage,
    handleChangeRowsPerPage,
    onSearchChange
  };
};
