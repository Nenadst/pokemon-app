import { FC } from 'react';
import { useCookies } from 'react-cookie';
import { Grid, Divider, Box } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

import ProfileInfoCard from 'src/components/InfoCards/ProfileInfoCard';
import ProfilesList from 'src/components/ProfilesList';

import Header from './components/Header';
import PlatformSettings from './components/PlatformSettings';
import profilesListData from './data/profilesListData';

const Profile: FC = () => {
  const [cookies] = useCookies(['userData']);
  const { fullName, email, phoneNumber, userInfo } = cookies.userData;

  return (
    <Box
      sx={{
        p: 13,
        pb: 0,
        position: 'relative'
      }}
    >
      <Box mb={2} />
      <Header fullName={fullName}>
        <Box mt={5} mb={3}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6} xl={4}>
              <PlatformSettings />
            </Grid>
            <Grid item xs={12} md={6} xl={4} sx={{ display: 'flex' }}>
              <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
              <ProfileInfoCard
                title="profile information"
                description={userInfo}
                info={{
                  fullName,
                  mobile: phoneNumber,
                  email,
                  location: 'USA'
                }}
                social={[
                  {
                    icon: <FacebookIcon />,
                    color: 'facebook'
                  },
                  {
                    icon: <TwitterIcon />,
                    color: 'twitter'
                  },
                  {
                    icon: <InstagramIcon />,
                    color: 'instagram'
                  }
                ]}
                action={{ route: '', tooltip: 'Edit Profile' }}
                shadow={false}
              />
              <Divider orientation="vertical" sx={{ mx: 0 }} />
            </Grid>
            <Grid item xs={12} xl={4}>
              <ProfilesList title="conversations" profiles={profilesListData} shadow={false} />
            </Grid>
          </Grid>
        </Box>
      </Header>
    </Box>
  );
};

export default Profile;
