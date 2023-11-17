import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import theme from 'src/theme';

export const StyledLink = styled(NavLink)({
  color: theme.palette.primary.main,
  fontSize: '16px'
});
