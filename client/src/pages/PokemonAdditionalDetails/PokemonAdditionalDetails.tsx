import React from 'react';
import { Box, Button, Grid, Typography, List, ListItem, Divider } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { usePokemonsDetails } from '../Dashboard/hooks/usePokemonsDetails';

const PokemonAdditionalDetails = () => {
  const navigate = useNavigate();
  const { name } = useParams();
  const { data: pokemonDetails } = usePokemonsDetails(name);
  const gameIndices = pokemonDetails?.game_indices || [];
  const moves = pokemonDetails?.moves || [];
  const stats = pokemonDetails?.stats || [];

  return (
    <Box sx={{ mt: 10, px: 2 }}>
      <Button onClick={() => navigate('/')}>Back to Home</Button>
      <Typography variant="h4">{`Details for ${name}`}</Typography>
      <Grid container spacing={2} mt={3}>
        <Grid item xs={12} md={6} lg={3}>
          <div>
            <Typography variant="h6">Game Indices:</Typography>
            <List
              sx={{ border: '1px solid #ccc', borderRadius: '4px', p: 1, backgroundColor: 'white' }}
            >
              {gameIndices.map((index, idx) => (
                <React.Fragment key={index.version.name}>
                  <ListItem key={index.version.name} sx={{ display: 'flex', gap: 3 }}>
                    <Typography variant="caption">Color: {index.version.name}</Typography>
                    <Typography variant="caption">Index: {index.game_index}</Typography>
                  </ListItem>
                  {idx < gameIndices.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <div>
            <Typography variant="h6">Moves:</Typography>
            <List
              sx={{ border: '1px solid #ccc', borderRadius: '4px', p: 1, backgroundColor: 'white' }}
            >
              {moves.map((move, idx) => (
                <React.Fragment key={move.move.name}>
                  <ListItem key={move.move.name} sx={{ display: 'flex', gap: 3 }}>
                    <Typography variant="caption">Move: {move.move.name}</Typography>
                  </ListItem>
                  {idx < moves.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <div>
            <Typography variant="h6">Stats:</Typography>
            <List
              sx={{ border: '1px solid #ccc', borderRadius: '4px', p: 1, backgroundColor: 'white' }}
            >
              {stats.map((stat, idx) => (
                <React.Fragment key={stat.stat.name}>
                  <ListItem key={stat.stat.name} sx={{ display: 'flex', gap: 3 }}>
                    <Typography variant="caption">Name: {stat.stat.name}</Typography>
                    <Typography variant="caption">Base: {stat.base_stat}</Typography>
                    <Typography variant="caption">Effort: {stat.effort}</Typography>
                  </ListItem>
                  {idx < gameIndices.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PokemonAdditionalDetails;
