import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { usePokemonsDetails } from 'src/pages/Dashboard/hooks/usePokemonsDetails';
import { PokemonCardParams } from './PokemonCard.types';

export const PokemonCard = ({ name, handleOpenModal }: PokemonCardParams): JSX.Element => {
  const { data: pokemonDetails } = usePokemonsDetails(name);

  return (
    <Card sx={{ cursor: 'pointer' }} onClick={() => handleOpenModal(name)}>
      <CardMedia
        sx={{ height: 300 }}
        image={pokemonDetails?.sprites?.front_default}
        title={name}
        component="div"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};
