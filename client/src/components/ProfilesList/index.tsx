/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, Box, Typography, Avatar, Button } from '@mui/material';

function ProfilesList({ title, profiles }: any) {
  const renderProfiles = profiles.map(({ image, name, description, action }: any) => (
    <Box key={name} component="li" display="flex" alignItems="center" py={1} mb={1}>
      <Box mr={2}>
        <Avatar src={image} alt="something here" />
      </Box>
      <Box display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center">
        <Typography variant="button" fontWeight="medium">
          {name}
        </Typography>
        <Typography variant="caption" color="text">
          {description}
        </Typography>
      </Box>
      <Box ml="auto">
        {action.type === 'internal' ? (
          <Button variant="text" color="info">
            {action.label}
          </Button>
        ) : (
          <Button
            component="a"
            target="_blank"
            rel="noreferrer"
            variant="text"
            color={action.color}
          >
            {action.label}
          </Button>
        )}
      </Box>
    </Box>
  ));

  return (
    <Card sx={{ height: '100%', boxShadow: 'none' }}>
      <Box pt={2} px={2}>
        <Typography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </Typography>
      </Box>
      <Box p={2}>
        <Box component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {renderProfiles}
        </Box>
      </Box>
    </Card>
  );
}

export default ProfilesList;
