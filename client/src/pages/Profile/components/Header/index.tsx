/* eslint-disable @typescript-eslint/no-explicit-any */
import { SyntheticEvent, useState } from 'react';
import { Card, Grid, AppBar, Tabs, Tab, Box, Typography, Avatar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import SettingsIcon from '@mui/icons-material/Settings';
import burceMars from 'src/assets/images/bruce-mars.jpg';
import backgroundImage from 'src/assets/images/bg-profile.jpeg';

function Header(props: any) {
  const [tabValue, setTabValue] = useState(0);

  const handleSetTabValue = (event: SyntheticEvent, newValue: number) => setTabValue(newValue);

  return (
    <Box position="relative" mb={5}>
      <Box
        display="flex"
        alignItems="center"
        position="relative"
        minHeight="18.75rem"
        borderRadius="xl"
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: '50%',
          overflow: 'hidden'
        }}
      />
      <Card
        sx={{
          position: 'relative',
          mt: -8,
          mx: 3,
          py: 2,
          px: 2
        }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <Avatar src={burceMars} alt="profile-image" sx={{ height: 75, width: 75 }} />
          </Grid>
          <Grid item>
            <Box height="100%" mt={0.5} lineHeight={1}>
              <Typography variant="h5" fontWeight="bold">
                {props.fullName}
              </Typography>
              <Typography variant="button" color="text" fontWeight="regular" fontSize={14}>
                CEO / Co-Founder
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={4} sx={{ ml: 'auto' }}>
            <AppBar position="static" sx={{ background: '#fff' }}>
              <Tabs value={tabValue} onChange={handleSetTabValue}>
                <Tab label="App" icon={<HomeIcon fontSize="small" sx={{ mt: -0.25 }} />} />
                <Tab label="Message" icon={<EmailIcon fontSize="small" sx={{ mt: -0.25 }} />} />
                <Tab label="Settings" icon={<SettingsIcon fontSize="small" sx={{ mt: -0.25 }} />} />
              </Tabs>
            </AppBar>
          </Grid>
        </Grid>
        {props.children}
      </Card>
    </Box>
  );
}

export default Header;
