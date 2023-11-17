/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef } from 'react';
import { MenuItem, Box, Typography } from '@mui/material';
import Link from '@mui/material/Link';

const NotificationItem = forwardRef(({ icon, title, ...rest }: any, ref) => (
  <MenuItem {...rest} ref={ref}>
    <Box component={Link} py={0.5} display="flex" alignItems="center" lineHeight={1}>
      <Typography variant="body1" color="secondary" lineHeight={0.75}>
        {icon}
      </Typography>
      <Typography variant="button" fontWeight="regular" sx={{ ml: 1 }}>
        {title}
      </Typography>
    </Box>
  </MenuItem>
));

export default NotificationItem;
