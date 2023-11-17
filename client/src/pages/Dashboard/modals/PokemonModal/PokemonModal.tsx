import { FC } from 'react';
import { Box, Button, CardMedia, Grid, Modal, Typography } from '@mui/material';
import { usePokemonsDetails } from 'src/pages/Dashboard/hooks/usePokemonsDetails';
import { useNavigate } from 'react-router-dom';
import routes from 'src/utils/routes';
import { ModalContent } from './PokemonModal.styles';
import { PokemonModalProps } from './PokemonModal.types';

const PokemonModal: FC<PokemonModalProps> = ({ handleCloseModal, name }) => {
  const { data: pokemonDetails } = usePokemonsDetails(name);

  const navigate = useNavigate();

  return (
    <Modal
      open
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      componentsProps={{ backdrop: { style: { backgroundColor: 'rgba(0, 0, 0, 0.1)' } } }}
      sx={{ minWidth: '500px' }}
    >
      <ModalContent sx={{ py: 5, px: 15, minWidth: 500 }}>
        <CardMedia
          sx={{ height: 250, width: '100%', objectFit: 'cover' }}
          image={pokemonDetails?.sprites?.front_default}
          title={name}
          component="div"
        />
        <Grid container spacing={1} sx={{ mt: 2, flexDirection: 'column', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
            <Typography variant="h6" fontWeight={'bold'} sx={{ mt: 2 }}>
              Name:
            </Typography>
            <Typography variant="h6" sx={{ mt: 2 }}>
              {name}
            </Typography>
          </Box>
          <Typography variant="h6" fontWeight={'bold'}>
            Abilities:
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
            {pokemonDetails?.abilities?.map((ability) => (
              <Box key={ability.ability.name} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography variant="h6"> {ability.ability.name}</Typography>
              </Box>
            ))}
          </Box>
        </Grid>
        <Grid container spacing={1} sx={{ mt: 2, flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h6" fontWeight={'bold'}>
            Types:
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
            {pokemonDetails?.types?.map((type) => (
              <Box key={type.type.name} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography variant="h6">{type.type.name}</Typography>
              </Box>
            ))}
          </Box>
        </Grid>
        <Button
          onClick={() => navigate(`${routes.ADDITIONAL_ABILITIES_PAGE}/${name}`)}
          sx={{ mt: 2 }}
        >
          See Aditional Details
        </Button>
      </ModalContent>
    </Modal>
  );
};

export default PokemonModal;
