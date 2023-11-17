import { MouseEvent } from 'react';
import { Typography, MenuItem, ButtonBase } from '@mui/material';
import { logoutUser } from 'src/api/user/userApi';
import { Cache } from 'src/config/cache';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { RenderMenuItemsProps } from './MenuItems.types';

const MenuItems = ({ items, handleClose }: RenderMenuItemsProps): JSX.Element => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const handleLogout = (event: MouseEvent<HTMLSpanElement>) => {
    event.preventDefault();
    logoutUser();
    queryClient.invalidateQueries([Cache.POKEMONS]);
  };

  return (
    <>
      {items.map((item) => (
        <MenuItem
          key={item}
          onClick={() => {
            handleClose();
            navigate('/profile');
          }}
        >
          <Typography textAlign="center">{item}</Typography>
        </MenuItem>
      ))}
      <MenuItem>
        <ButtonBase onClick={handleLogout}>
          <Typography textAlign="center">Logout</Typography>
        </ButtonBase>
      </MenuItem>
    </>
  );
};

export default MenuItems;
