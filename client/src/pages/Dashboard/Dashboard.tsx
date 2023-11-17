import { FC } from 'react';
import {
  Container,
  Grid,
  Pagination,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress
} from '@mui/material';
import PokemonModal from 'src/pages/Dashboard/modals/PokemonModal/PokemonModal';
import { PokemonCard, Search } from 'src/components';
import { useDashboard } from './hooks/useDashboard';

const Dashboard: FC = () => {
  const {
    isModalOpen,
    isPokemonLoading,
    page,
    rowsPerPage,
    search,
    pokemonList,
    selectedPokemon,
    handleOpenModal,
    handleCloseModal,
    handleChangePage,
    handleChangeRowsPerPage,
    onSearchChange
  } = useDashboard();

  const renderPokemonCards = () => {
    if (!pokemonList) return null;

    const filteredPokemonList = pokemonList.results.filter((pokemon) =>
      pokemon.name.includes(search || '')
    );

    return filteredPokemonList.map((pokemon) => (
      <Grid item xs={12} md={4} lg={3} key={pokemon.name}>
        <PokemonCard name={pokemon.name} handleOpenModal={handleOpenModal} />
      </Grid>
    ));
  };

  if (isPokemonLoading) return <CircularProgress />;

  return (
    <Container maxWidth="xxl" sx={{ pt: 15 }}>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Search value={search || ''} onChange={onSearchChange} />
        </Grid>

        {renderPokemonCards()}

        <Grid container spacing={2} my={2} justifyContent={'center'} alignItems={'center'}>
          <Grid item>
            <Pagination page={page || 1} onChange={handleChangePage} count={pokemonList?.count} />
          </Grid>
          <Grid item xs={3}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Rows Per Page</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={rowsPerPage}
                label="Rows Per Page"
                onChange={handleChangeRowsPerPage}
              >
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={30}>30</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
      {isModalOpen && <PokemonModal handleCloseModal={handleCloseModal} name={selectedPokemon} />}
    </Container>
  );
};

export default Dashboard;
