import { Paper, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface SearchParams {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}
export const Search = ({ value, onChange }: SearchParams) => (
  <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
    <InputBase
      sx={{ ml: 1, flex: 1 }}
      placeholder="Search Pokemons"
      inputProps={{ 'aria-label': 'search pokemons' }}
      value={value}
      onChange={onChange}
    />
    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
      <SearchIcon />
    </IconButton>
  </Paper>
);
